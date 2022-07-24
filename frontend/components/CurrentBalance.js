import React from "react";
import { useWeb3React } from "@web3-react/core";
import { fetcher } from "../utils/fetcher";
import { formatEther } from "@ethersproject/units";
import useSWR from "swr";

const Balance = () => {
  const { account, library } = useWeb3React();
  const { data: balance } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });
  if (!balance) {
    return <div>...</div>;
  }
  return <div>Ξ {parseFloat(formatEther(balance)).toPrecision(4)}</div>;
};

export default Balance;
