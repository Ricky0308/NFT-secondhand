import contract from "../contracts/abi.json";
import contractAddress from "../contracts/contractAddress"
import { ethers } from "ethers";
const abi = contract.abi;

export const approved_manga = async (To,Manga_id,Price) => {
    try {
        const { ethereum } = window;
        
  
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddress, abi, signer);
          console.log(To);
          console.log(Manga_id);
          console.log(Price);
          const price=String(Price);
          console.log(price);
          await nftContract.approve_manga(To,Manga_id,ethers.utils.parseEther(price));
          return (window.alert("譲渡権限を相手に付与しました!適用まで１分ほどかかります"));
        } else {
          console.log("Ethereum object does not exist");
        }
      } catch (err) {
        return (window.alert("譲渡権限を相手に付与できませんでした"));
        console.log(err);
      }
}
