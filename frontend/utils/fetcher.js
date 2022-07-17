import { Contract } from "@ethersproject/contracts";

export const fetcher =
    (library) =>
    (...args) => {
        const [method, ...params] = args;
        console.log(method, params);
        return library[method](...params);
    };

export const fetcherContractView =  (library, abi) => async (...args) => {
    const [address, method, ...params] = args;
    const currentContract = new Contract(address, abi, library.getSigner());
    const result =  await currentContract[method](...params);
    return result;

};
// method params - balanceOf(address) - ['balanceOf', 'address']
// approve - (sender, to, amount)
