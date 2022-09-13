import { useEffect, useState } from "react";
import "./App.css";

import contract from "./contracts/abi.json";
import { ethers } from "ethers";

const contractAddress = "0xb9c35E386528047Aaa810F6E3d2521a202E7872F";
const abi = contract.abi;

export default function Test() {
  const [balance, setText_0] = useState(""); //デポジット額保存

  const [mint_mode, setText_1] = useState(""); //購入する巻のテキスト保存

  const [Selling_price, setText_2] = useState(""); //販売価格のテキスト保存
  const [To, setText_3] = useState(""); //販売相手のアドレスを保存
  const [Manga_id, setText_4] = useState(""); //販売するNFTの漫画idを保存

  const [Buy_price, setText_5] = useState(""); //購入価格のテキスト保存
  const [Buy_Token_id, setText_6] = useState(""); //購入するNFTのトークンidを保存

  const [Viewable, setText_7] = useState(""); //閲覧可能な巻を保存

  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const get_balanceHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        const _balance = await nftContract.get_deposit();
        console.log("_balance succeeded");
        console.log(_balance["_hex"]);
        // console.log(parseInt(_balance["_hex"],16)); 

        setText_0(parseInt(_balance["_hex"], 16) / 1000000000000000000); //weiからEtherに変換
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        let nftTxn = await nftContract.mint(mint_mode, {
          value: ethers.utils.parseEther("0.002"),
        });

        await nftTxn.wait();

        console.log(mint_mode);
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const get_mftHandler = async () => {
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

        setText_7(items);
        console.log(items);

        console.log("Mining... please wait");
        return items;
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const approveHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");

        console.log(Selling_price);
        const res = await nftContract.approve_manga(
          To,
          Manga_id,
          ethers.utils.parseEther(Selling_price)
        );

        console.log("Mining... please wait");
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const tradeHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");

        console.log(Selling_price);
        console.log(Buy_Token_id);

        const res = await nftContract.trade(Buy_Token_id, {
          value: ethers.utils.parseEther(Buy_price),
        });

        console.log("Mining... please wait");
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        ログイン
      </button>
    );
  };

  const get_balanceButton = () => {
    return (
      <button
        onClick={get_balanceHandler}
        className="cta-button connect-wallet-button"
      >
        残高照会
      </button>
    );
  };

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className="cta-button mint-nft-button">
        NFTを発行(巻数を指定)
      </button>
    );
  };

  const get_nfts = () => {
    return (
      <button onClick={get_mftHandler} className="cta-button mint-nft-button">
        所持しているNFTから閲覧可能な巻を確認
      </button>
    );
  };

  const approve = () => {
    return (
      <button onClick={approveHandler} className="cta-button mint-nft-button">
        販売
      </button>
    );
  };

  const trade = () => {
    return (
      <button onClick={tradeHandler} className="cta-button mint-nft-button">
        購入
      </button>
    );
  };

  const withdraw = () => {
    return (
      <button onClick={withdrawHandler} className="cta-button mint-nft-button">
        払い出し
      </button>
    );
  };

  return (
    <div className="main-app">
      <h1>Scrappy Squirrels Tutorial</h1>
      <div>
        <br />
        <br />
        {connectWalletButton()}
        <br />
        <br />
        {get_balanceButton()}
        <br />
        <br />
        {balance}Ether
        <br />
        <br />
        閲覧系の関数
        <br />
        <input
          type="text"
          value={mint_mode}
          onChange={(event) => setText_1(event.target.value)}
        />
        巻
        <br />
        {mintNftButton()}
        <br />
        <br />
        {get_nfts()}
        <br />
        {Viewable.toString().split()}
        <br />
        <br />
        譲渡系の関数
        <br />
        <input
          type="text"
          value={Selling_price}
          onChange={(event) => setText_2(event.target.value)}
        />
        ether 販売価格
        <br />
        <input
          type="text"
          value={To}
          onChange={(event) => setText_3(event.target.value)}
        />
        販売する相手のアドレス
        <br />
        <input
          type="text"
          value={Manga_id}
          onChange={(event) => setText_4(event.target.value)}
        />
        Manga_id
        <br />
        {approve()}
        <br />
        <br />
        <input
          type="text"
          value={Buy_price}
          onChange={(event) => setText_5(event.target.value)}
        />
        ether 購入価格
        <br />
        {/* 自動取得したい */}
        <input
          type="text"
          value={Buy_Token_id}
          onChange={(event) => setText_6(event.target.value)}
        />
        Token_id
        <br />
        {trade()}
        <br />
        <br />
        {withdraw()}
      </div>
    </div>
  );
}
