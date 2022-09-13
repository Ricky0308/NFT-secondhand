import contract from "../contracts/abi.json";
import contractAddress from "../contracts/contractAddress"
import { ethers } from "ethers";
const abi = contract.abi;

export const isapprove = async (Manga_id) => {
    try {
        const { ethereum } = window;
        
  
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddress, abi, signer);
          
          console.log("fawfwafawfawfawfafwa");
          console.log(Manga_id);
          const res=await nftContract.is_mangaapprove(Manga_id);
          console.log("fawfwafawfawfawfafwawfaaaaaaaaaaaaaaaaaa");
          if (res!=0){
          return (window.alert("取引相手にトークンID "+res +" を伝えて取引を実行してください"));
            }
          return (window.alert("譲渡ボタンを押して取引を実行してください"));
        } else {
          console.log("Ethereum object does not exist");
        }
      } catch (err) {
        return (window.alert("譲渡権限をaaa相手に付与できませんでした"));
        console.log(err);
      }
}
