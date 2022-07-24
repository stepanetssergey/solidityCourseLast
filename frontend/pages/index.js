import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import AddDeposit from "../components/AddDeposit";
import ShowDeposit from "../components/ShowDeposit";
import Balance from "../components/CurrentBalance";
import ShowDepositWithSWR from '../components/ShowDepositWithSWR';
import { useWeb3React } from "@web3-react/core";

export default function Home() {
  const { active } = useWeb3React()
  return (
    <>
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
    </>
  );
}
