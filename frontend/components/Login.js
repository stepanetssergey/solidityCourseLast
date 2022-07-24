import React, {useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import axios from 'axios';

const Login = () => {

    const context = useWeb3React()
    const { active, library, account } = context;
    const [login, setLogin] = useState(false)
    const handleLoginButton = async () => {
        var data = JSON.stringify({"address":account});

        var configNonce = {
        method: 'post',
        url: 'http://localhost:8000/nonce',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        const resultNonce = await axios(configNonce)


        const signature = await library.getSigner(account).signMessage(resultNonce.data.msg);
        console.log(signature)
          // 1. get message from backend
          // 2. sign message get signature base on address
          // 3. { address: address, signature: signature}
          // 4. descript signature (base on message, account) compare with address whitch was sent
        var data = JSON.stringify({"signature":signature,"address":account});

        var config = {
        method: 'post',
        url: 'http://localhost:8000/auth',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

       try {
        const response = await axios(config)
        console.log(response)
        if (response.data.error === undefined) {
          console.log("Current JWT token", response.data.jwt)
          setLogin(true)
        }
        
       } catch(e) {
        console.log(e)
       }
        
        

    }
    return (
        <div>
           <button onClick = {handleLoginButton} >{login ? "Your Profile": "Login"}</button>
        </div>
    )
}

export default Login;