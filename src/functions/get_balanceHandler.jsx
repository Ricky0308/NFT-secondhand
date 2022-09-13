import { ethers } from 'ethers';
import contract from '../contracts/abi.json';

const contractAddress = "0x6eff556A42A68aB1C87D70CDB504429E5E563b00";
const abi = contract.abi;

const get_balanceHandler = async () => {
  try {
    const { ethereum } = window;
    
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, abi, signer);
      const _balance = await nftContract.get_deposit();
      

      // console.log(_balance["_hex"]);
      // console.log(parseInt(_balance["_hex"],16));

      return (parseInt(_balance["_hex"], 16) / 1000000000000000000); //weiからEtherに変換
    } else {
      console.log("Ethereum object does not exist");
    }
  } catch (err) {
    console.log(err);
  }
}
