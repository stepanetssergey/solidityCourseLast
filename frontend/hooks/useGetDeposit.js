import React, { useContext } from "react";
import Web3 from "web3";
import { Config } from "../config";
import tokenDepoistABI from "../config/tokenDeposit.json";

export default function useTokenDepositContract(account) {
  const [data, setData] = React.useState();

  const contract = React.useMemo(() => {
    // create provider
    const web3 = new Web3(Config().BLOCKCHAIN_NODE);
    // create contract instance
    try {
      var Contract = new web3.eth.Contract(
        tokenDepoistABI.abi,
        Config().tokenDepositAddress
      );
      return Contract;
    } catch (e) {
      return {};
    }
  }, []);

  const getTokenDepositData = React.useCallback(async () => {
    console.log(contract);
    //try {
    var userDeposit = await contract.methods
      .Users("0xbAb3Eb591624B8309FB45e4E5ACC098A04B7bc83")
      .call(); //get round id
    console.log(userDeposit);
    setData(userDeposit);
    // } catch (e) {
    //   console.log(e)
    //   setData({});
    // }
  }, [setData, contract]);

  React.useEffect(() => {
    getTokenDepositData();
  }, [getTokenDepositData]);

  return data;
}
