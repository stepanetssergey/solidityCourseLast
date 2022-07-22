import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import AddDeposit from "../components/AddDeposit";
import ShowDeposit from "../components/ShowDeposit";
import Balance from "../components/CurrentBalance";
import ShowDepositWithSWR from '../components/ShowDepositWithSWR';
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import {DepositContext} from "../hooks/DepositContext";
import { depositActionCreator } from "../store/reducers/addDeposit/action-creators";

export default function Home() {
  const dispatch = useDispatch();
  const context = useWeb3React();
  const { library, account, active } = context;

  const makeDeposit = (currentDepositValue) => {
    if (active) {
      dispatch(depositActionCreator.addDeposit(library.getSigner(account).connectUnchecked(), currentDepositValue))
    }
  };

  return (
    <DepositContext.Provider value={makeDeposit}>
      <main className={styles.main}>
        <div>
          BALANCE: <Balance />{" "}
        </div>
        <Header />
        <div>
          <AddDeposit />
        </div>
        <ShowDeposit />
        <div>SHOW DEPOSIT WITH SWR</div>
        {!active ? <div/> :<div><ShowDepositWithSWR /></div>}
      </main>
    </DepositContext.Provider>
  );
}
