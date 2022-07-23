import React, { useState, createContext, useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { Config } from "../config";
import Spinner from "../components/Spinner";
import depositABI from "../config/tokenDeposit.json";
import { useDispatch, useSelector } from "react-redux";
import { depositActionCreator } from "../store/reducers/addDeposit/action-creators";
import {DepositContext} from "../hooks/DepositContext";
import useMakeDeposit from "../hooks/useMakeDeposit";


const AddDeposit = () => {
  const [currentDepositValue, setCurrentDepositValue] = useState(0);
  const { depositIsLoading } = useSelector(state => state.depositReducer);
  const dispatch = useDispatch();
  const context = useWeb3React();
  const { library, account, active } = context;
  const makeDeposit = useContext(DepositContext);

  const handleChangeValue = (e) => {
    setCurrentDepositValue(e.target.value);
  };

  const handleAddDeposit = () => {
    console.log("Add value to contract");
    if (!active) {
      return;
    }
    // dispatch(depositActionCreator.addDeposit(library.getSigner(account).connectUnchecked(), currentDepositValue))
    useMakeDeposit(currentDepositValue);
  };
  return (
    <div className="deposit-value">
      <input
        type="number"
        disabled={!active}
        value={currentDepositValue}
        onChange={handleChangeValue}
      />
      <button onClick={handleAddDeposit}>
        {depositIsLoading ? <Spinner /> : "Add deposit"}
      </button>
    </div>
  );
};

export default AddDeposit;
