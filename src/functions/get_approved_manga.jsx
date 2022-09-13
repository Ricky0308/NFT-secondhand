import contract from "../contracts/abi.json";
import { ethers } from "ethers";
const contractAddress = "0xb9c35E386528047Aaa810F6E3d2521a202E7872F";
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
