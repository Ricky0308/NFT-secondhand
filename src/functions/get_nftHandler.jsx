import contract from "../contracts/abi.json";
import { ethers } from "ethers";
const contractAddress = "0xb9c35E386528047Aaa810F6E3d2521a202E7872F";
const abi = contract.abi;
export const get_nftHandler = async () => {
    var items = [];
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Initialize payment");
        for (let i = 1; i <= 5; i++) {
          const res = await nftContract._auth(i);
          if (res === true) {
            items.push(i);
          }
        }
        console.log("Mining... please wait");
        return items;
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };