import { ethers } from 'ethers';
import contract from '../contracts/abi.json';

const contractAddress = "0xb9c35E386528047Aaa810F6E3d2521a202E7872F";
const abi = contract.abi;

export default function AssignmentHandler(Sell_price,To,Manga_id) {
    
    const assignmentHandler = async () => {
        try {
            const { ethereum } = window;
      
            if (ethereum) {
              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const nftContract = new ethers.Contract(contractAddress, abi, signer);
      
              console.log("Initialize payment");
      
              console.log(Sell_price);
              console.log(To);
              console.log(Manga_id);
              
              const res = await nftContract.approve_manga(
                To,
                Manga_id,
                ethers.utils.parseEther(Sell_price)
              );
      
              console.log("Mining... please wait");
            } else {
              console.log("Ethereum object does not exist");
            }
          } catch (err) {
            console.log(err);
          }
      }

      
    
      assignmentHandler();
}