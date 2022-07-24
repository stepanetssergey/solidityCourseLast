import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import mysql from 'mysql2';
import jwt from 'jsonwebtoken';


export const handleRequestLogin =  (req, res) => {
    const { signature, address } = req.body;
        

    const getTimestampByAddress =  (address, callback) => {
        var queryResult;
        
    const SELECT_TIMESTAMP_BY_ADDRESS = `
       select nonceTimestamp  from sessions where useAddress = '${address}' order by nonceTimestamp desc limit 1;
    `
        
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "backend",
            password: "ghjcnjgfhjkm12345"
          });
    
        connection.connect(err => {
           if (err) {
               console.log("ERROR MYSQL")
           } else {
               console.log("Database connected")
           }
        })
        const result = connection.query(SELECT_TIMESTAMP_BY_ADDRESS, 
            function(err, results, fields){
                console.log(err);
                // queryResult = results
                console.log('Result', results[0].nonceTimestamp);
                // console.log(fields)
                return callback(results[0].nonceTimestamp)
        })
    
    //     //console.log(queryResult)
    
        connection.end();
    }
    
        getTimestampByAddress(address, function(result) {
            const msg = `That is test message for sign in Metamask (${result})`;
            console.log('MESSAGE WITH CURRENT TIMESTAMP', msg)
                const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
                const checkAddress = recoverPersonalSignature({
                    data: msgBufferHex,
                    sig: signature,
                });
                console.log(address)
                if (checkAddress.toLocaleLowerCase() == address.toLocaleLowerCase()) {
                    return res.status(200)
                            .send(JSON.stringify({address, jwt: jwt.sign({ address }, 'this message')}))  
                } else {
                    return res.status(200).send(JSON.stringify({error:"Not correct address"}))
                }
        })

}