import React, { useContext } from "react";
import Web3 from "web3";
import { Config } from "../config";
import tokenDepoistABI from "../config/tokenDeposit.json";
import { useWeb3React } from "@web3-react/core";
// import { useDispatch } from "react-redux";
import { depositActionCreator } from "../store/reducers/addDeposit/action-creators";
import { store } from "../store";

export default function useTokenMakeDeposit(currentDepositValue) {
  // const dispatch = useDispatch();
  const context = useWeb3React();
  const { library, account, active } = context;


  return store.dispatch(depositActionCreator.addDeposit(library.getSigner(account).connectUnchecked(), currentDepositValue));
}
