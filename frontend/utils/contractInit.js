import { Contract } from "@ethersproject/contracts";

export const contractInit = (address, abi, signer) => {
    const contract = new Contract(address, abi, signer)
    return contract
}