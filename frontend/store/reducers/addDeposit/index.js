import { depositActions } from "./type"

const initialState = {
    deposit: 0,
    depositIsLoading: false,
    currentDepositValue: 0,
    
}
export const  depositReducer = (
    state = initialState,
    action,
  ) => {
    switch (action.type) {
        case depositActions.SET_NEW_DEPOSIT:
            return {...state, deposit: action.payload}
        case depositActions.SET_DEPOSIT_IS_LOADING:
            return {...state, depositIsLoading: action.payload}
        default:
            return state;
    }
}
