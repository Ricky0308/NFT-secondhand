//https://qiita.com/Bashi50/items/8964cc55c596e51fcbbe
//npm install material-icons@latest
import React from "react";
import {useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import withdrawHandler from "../functions/withdrawHandler";
// import get_balanceHandler from "../functions/get_balanceHandler"
import LoginIcon from '@mui/icons-material/Login';
import CheckIcon from '@mui/icons-material/Check';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Assignment from "./assignment";
import Modal from "@mui/material/Modal";

import contract from "../contracts/abi.json";
import { ethers } from "ethers";




function Nav() {
  const [open, setOpen] = React.useState(false);
  const [deposit, setDeposit] = React.useState(0);

  
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };



    const [currentAccount, setCurrentAccount] = useState(null);
    let connected = false;
    let installed = false;
    const contractAddress = "0xb9c35E386528047Aaa810F6E3d2521a202E7872F";
    const abi = contract.abi;
    const value=0;
    const checkWalletIsConnected = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          console.log("Make sure you have Metamask installed!");
          return;
        } else {
          console.log("Wallet exists! We're ready to go!")
        }
    
        const accounts = await ethereum.request({ method: 'eth_accounts' });
    
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account: ", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
      }

    window.ethereum.on('accountsChanged', function (accounts) {
      console.log("change");
      //const aaa = _get_balanceHandler();
      get_balanceHandler();
    })
    
    const connectWalletHandler = async () => {
      const { ethereum } = window;
  
      if (!ethereum) {
        alert("Please install Metamask!");
      }
  
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Found an account! Address: ", accounts[0]);
        setCurrentAccount(accounts[0]);
        get_balanceHandler();
        
      } catch (err) {
        console.log(err)
      }
    }

    const get_balanceHandler = async () => {
      try {
        const { ethereum } = window;
        
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(contractAddress, abi, signer);
          const _balance = await nftContract.get_deposit();
          

          // console.log(_balance["_hex"]);
          // console.log(parseInt(_balance["_hex"],16));
  
          setDeposit(parseInt(_balance["_hex"], 16) / 1000000000000000000); //weiからEtherに変換
        } else {
          console.log("Ethereum object does not exist");
        }
      } catch (err) {
        console.log(err);
      }
    }

    const connectWalletButton = () => {
        
        return (
          <button
          onClick = {() => {
            connectWalletHandler();
            
        }}
          className="cta-button connect-wallet-button">
          <LoginIcon / >
          </button>
        )
      }

    
      
    const get_balanceButton = () => {
      
      return (
        <button
          onClick={handleOpen}
          className="cta-button connect-wallet-button"
        >
          デポジット : {deposit}
        </button>
      );
    }
    


    useEffect(() => {
    checkWalletIsConnected();
    get_balanceHandler();
    
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" size="large" href="/bookshell" sx={{ mx: 1 }}>
                    Secondly
                </Button>
            </Typography>
            <Button color="inherit" href="/publish" sx={{ mx: 1 }}>
              新品購入  
            </Button>
            <Button color="inherit" href="/purchase" sx={{ mx: 1 }}>
              中古購入  
            </Button>

            {currentAccount ? get_balanceButton() : connectWalletButton()}
            </Toolbar>
            

            
        </AppBar>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    textAlign: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800,
                    bgcolor: "background.paper",
                    // border: "2px solid #000",
                    borderRadius: "16px",
                    boxShadow: 24,
                    p: 7,
                }}
            >
                デポジット金額は<br/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {deposit}Eth<br/>
                
                <Button variant="outlined"  onClick={withdrawHandler} >
                  払い出し
                  
                </Button>
               </Typography>
                
            </Box>
        </Modal>
        </Box>
        
        
    )
}


export default Nav;