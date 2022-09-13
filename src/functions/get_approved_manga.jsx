import contract from "../contracts/abi.json";
import { ethers } from "ethers";
import contractAddress from "../contracts/contractAddress";
const abi = contract.abi;

export const get_approved_manga = async (tokenid) => {
    try {
        const { ethereum } = window;
        
  
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddress, abi, signer);

          const res = await nftContract.getApproved_manga(tokenid);
          console.log(res);
  
          return res;
        } else {
          console.log("Ethereum object does not exist");
        }
      } catch (err) {
        console.log(err);
      }
}
