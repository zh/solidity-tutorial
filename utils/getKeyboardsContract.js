import { ethers } from 'ethers';

import abi from '../utils/Keyboards.json';

const contractAddress = '0xD43eB9e65Fcd1c413EB0F7DD7daE45277e6bEd95';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
