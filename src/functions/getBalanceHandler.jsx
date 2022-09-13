import { ethers } from 'ethers';
import contract from '../contracts/abi.json';
import contractAddress from "../contracts/contractAddress";

//<GetbalanceHandler setDepo(x) => { setDeposit(x) }  />でよびだせそう 

export default function GetbalanceHandler({ setDepo }) {
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
        setDepo(parseInt(_balance["_hex"], 16) / 1000000000000000000);
        // setDeposit(parseInt(_balance["_hex"], 16) / 1000000000000000000); //weiからEtherに変換
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  }
  get_balanceHandler();
}
