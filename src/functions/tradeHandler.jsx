import { ethers } from 'ethers';
import contract from '../contracts/abi.json';
import contractAddress from '../contracts/contractAddress';

const abi = contract.abi;

export default function TradeHandler(buyPrice) {
    const Selling_price = "";
    const Buy_Token_id = "";
    const tradeHandler = async () => {
        try {
            console.log("wawawawa" + buyPrice);
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(contractAddress, abi, signer);
                console.log("Initialize payment");
                console.log(Selling_price);
                console.log(Buy_Token_id);
                const res = await nftContract.trade(Buy_Token_id, { value: ethers.utils.parseEther(buyPrice) });
                console.log("Mining... please wait");
            } else {
                console.log("Ethereum object does not exist");
            }

        } catch (err) {
            console.log(err);
        }
    }
    tradeHandler();
}