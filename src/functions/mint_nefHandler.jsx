import { ethers } from 'ethers';
import contract from '../contracts/abi.json';
import contractAddress from '../contracts/contractAddress';

const abi = contract.abi;

export default function MintHandler(Num) {
  const Selling_price = "";
  const Buy_Token_id = "";
  const mintHandler = async () => {


    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");

        console.log(Num);
        let nftTxn = await nftContract.mint(Num, {
          value: ethers.utils.parseEther("0.002"),
        });
        console.log("Mining... please wait");
        return (window.alert("購入しました!適用まで１分ほどかかります"));

      } else {
        console.log("Ethereum object does not exist");
      }

    } catch (err) {
      return (window.alert("購入に失敗しました"));
      console.log(err);

    }

  }


  mintHandler();
}