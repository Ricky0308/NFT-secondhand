import { ethers } from 'ethers';
import contract from '../contracts/abi.json';

const contractAddress = "0x6eff556A42A68aB1C87D70CDB504429E5E563b00";
const abi = contract.abi;

export default function WithdrawHandler(buyPrice) {
    const Selling_price = "";
    const Buy_Token_id = "";
    const withdrawHandler = async () => {
        try {
          const { ethereum } = window;
    
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(contractAddress, abi, signer);
    
            console.log("Initialize payment");
            
            console.log(Selling_price);
            const res = await nftContract.withdraw();
              
            
            console.log("Mining... please wait");
            
    
          } else {
            console.log("Ethereum object does not exist");
          }
    
        } catch (err) {
          console.log(err);
        }
      }
    
      
    withdrawHandler();
}