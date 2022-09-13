import contract from "../contracts/abi.json";
import { ethers } from "ethers";
import contractAddress from "../contracts/contractAddress";
const abi = contract.abi;

export const assignmentHandler = async (Manga_id, To, Sell_price) => {
    try {
        const { ethereum } = window;
  
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddress, abi, signer);
  
          console.log("Initialize payment");
  
          console.log(`Sell_price : ${Sell_price}`);
          console.log(To);
          console.log(Manga_id);
          
          const res = await nftContract.approve_manga(
            To,
            Manga_id,
            ethers.utils.parseEther(Sell_price.toString())
          );
  
          console.log("Mining... please wait");
          console.log(res);
          return res;
        } else {
          console.log("Ethereum object does not exist");
        }
      } catch (err) {
        console.log(err);
      }
}
