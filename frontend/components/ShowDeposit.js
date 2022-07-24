import React from "react";
import { useWeb3React } from "@web3-react/core";
import useGetDeposit from "../hooks/useGetDeposit";

const ShowDeposit = () => {
  const { account, active } = useWeb3React();
  let data;
  if (active) {
    data = useGetDeposit(account, active)
  } 
   return (
    <div>
      {data === undefined ? <div>Loading....</div> : <div>{data.deposit}</div>}
    </div>
  );
};

export default ShowDeposit;
