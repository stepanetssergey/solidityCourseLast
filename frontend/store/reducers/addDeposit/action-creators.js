import { depositActions } from "./type"
import { Config } from "../../../config";
import depositABI from "../../../config/tokenDeposit.json";
import { contractInit } from "../../../utils/contractInit";

export const depositActionCreator = {
    setDeposit: (deposit) => ({
      type: depositActions.SET_NEW_DEPOSIT,
      payload: deposit,
    }),
    setDepositLoading: (isLoading) => ({
      type: depositActions.SET_DEPOSIT_IS_LOADING,
      payload: isLoading,
    }),
    addDeposit: 
    (signer, currentDepositValue) => async (dispatch, store) => {
      console.log("TEST")
      const contract = contractInit(Config().tokenDepositAddress, depositABI.abi, signer)
      const trx = await contract.addDeposit(currentDepositValue);
    dispatch(depositActionCreator.setDepositLoading(true))
    await trx.wait();
    dispatch(depositActionCreator.setDepositLoading(false))
    }

 }  