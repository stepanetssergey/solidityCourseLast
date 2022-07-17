import React, {useEffect} from "react";
import { useWeb3React } from "@web3-react/core";
import { fetcherContractView } from "../utils/fetcher";
import { Config } from "../config";
import tokenDepoistABI from "../config/tokenDeposit.json";

import useSWR from "swr";

const ShowDeposit = () => {
  const { library, account, active } = useWeb3React();
  const { data, mutate } = useSWR([Config().tokenDepositAddress, 'getUserDeposit', account], {
    fetcher: fetcherContractView(library, tokenDepoistABI.abi),
  });

  useEffect(() => {
    // listen for changes on an Ethereum address
    if (!active) return
    console.log(`listening for blocks...`)
    library.on('block', () => {
      console.log('update balance...')
      mutate(undefined, true)
    })
    // remove listener when the component is unmounted
    return () => {
      library.removeAllListeners('block')
    }
    // trigger the effect only on component mount
  }, [])

  return (
    <div>
      {data === undefined ? <div>Loading....</div> : <div>{data.toString()}</div>}
    </div>
  );
};

export default ShowDeposit;
