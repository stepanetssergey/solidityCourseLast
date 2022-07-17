import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { Config } from "../config";
import Spinner from "../components/Spinner";
import depositABI from "../config/tokenDeposit.json";

const AddDeposit = () => {
  const [currentDepositValue, setCurrentDepositValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const context = useWeb3React();
  const { library, account, active } = context;

  const handleChangeValue = (e) => {
    setCurrentDepositValue(e.target.value);
  };

  const handleAddDeposit = async () => {
    console.log("Add value to contract");
    if (!active) {
      return;
    }
    const addDepositContract = new Contract(
      Config().tokenDepositAddress,
      depositABI.abi,
      library.getSigner(account).connectUnchecked()
    );
    const trx = await addDepositContract.addDeposit(currentDepositValue);
    setIsLoading(true);
    await trx.wait();
    setIsLoading(false);
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
        {isLoading ? <Spinner /> : "Add deposit"}
      </button>
    </div>
  );
};

export default AddDeposit;
