//https://qiita.com/Bashi50/items/8964cc55c596e51fcbbe
//npm install material-icons@latest
import {useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
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

function Nav() {
    const [currentAccount, setCurrentAccount] = useState(null);
    let connected = false;
    let installed = false;
    const accounts="";
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

      const connectWalletHandler = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          alert("Please install Metamask!");
        }
    
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          console.log("Found an account! Address: ", accounts[0]);
          setCurrentAccount(accounts[0]);
        } catch (err) {
          console.log(err)
        }
      }



    const connectWalletButton = () => {
        return (
        //     <button onClick={connectWalletHandler}  className='cta-button connect-wallet-button'>
        //     ログイン
        //   </button>
        < div className="login" onClick={connectWalletHandler}>
        <LoginIcon / >
        </div>
        
        )
      }
      const logoutWalletButton = () => {
        return (
        <CheckIcon />
        )
      }
    


    useEffect(() => {
    checkWalletIsConnected();
    
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" href="/" sx={{ mx: 1 }}>
                    Secondly
                </Button>
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" href="/test" sx={{ mx: 1 }}>
                    購入    
                </Button>
            </Typography>
            <Typography variant="h7"  component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" href="/" sx={{ mx: 1 }}>
                    譲渡
                </Button>
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" href="/test" sx={{ mx: 1 }}>
                    中古を購入
                </Button>
            </Typography>
            {currentAccount ? logoutWalletButton() : connectWalletButton()}
            </Toolbar>

            
        </AppBar>
        </Box>
        
        
    )
}


export default Nav;