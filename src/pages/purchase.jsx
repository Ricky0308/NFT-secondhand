import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import contract from '../contracts/abi.json';
import PurchaseModal from "../components/purchaseModal";
import tradeHandler from "../functions/tradeHandler";
import contractAddress from "../contracts/contractAddress";
import { useContext } from "react";
import { PurchaseInfoContext } from "../providers/PurchaseInfoProvider";
import { get_approved_manga } from "../functions/get_approved_manga";
import { useEffect } from "react";
import { FetchContentInfo } from "../api/functions";
import { BigNumber } from "ethers";
import { ethers } from "ethers";

const abi = contract.abi;

export default function Purchase() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const { tokenId, setTokenId, setCover, cover, title, setTitle, setNftPrice } = useContext(PurchaseInfoContext);

    useEffect(() => {
        get_approved_manga(tokenId)
            .then((res) => {
                if (res ){
                    const bookId = parseInt(res[0]["_hex"], 16);
                    const price = ethers.utils.formatEther(res[1]["_hex"]);
                    const buyer = parseInt(res[2]);
                    console.log("price");
                    console.log(price);
                    setNftPrice(price.toString());
                    if (buyer == "0xac4FD9a49828e353512b0bD3d01589576757394A"){
                        console.log("found!!!!!!!!!!!!!!!!!!!!!!!!!")
                    }
                    return bookId;
                }else{
                    setCover("");
                    setTitle("");
                }
            })
            .then((bookId)=>{
                return FetchContentInfo(bookId)
            })
            .then((items)=>{
                setCover(items.cover);
                setTitle(items.title);
            })
    }, [tokenId])

    console.log("tokenId");
    console.log(tokenId);
    return (
        <div style={{ textAlign: "left" }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                marginTop={5}
                marginBottom={5}
                marginLeft={10}
            >
                購入する
            </Typography>
            <Box sx={{ backgroundColor: "#edf2f7", padding: 5, height: "100vh" }}>
                <Container
                    maxWidth="md"
                    sx={{ bgcolor: "#ffffff", borderRadius: "16px" }}
                >
                    <Container
                        component="main"
                        sx={{ display: "inline" }}
                    >
                        <Box p={5}>
                            <Box height={300}>
                                <Typography variant="h5" marginBottom={5} fontWeight="bold">
                                    トークンID
                                </Typography>
                                <TextField
                                    id="tokenId"
                                    fullWidth
                                    label="Token ID"
                                    variant="outlined"
                                    value={tokenId}
                                    onChange={(e) => setTokenId(e.target.value)}
                                />
                            </Box>
                            <Stack direction="row" marginTop={5}>
                                <div style={{ flexGrow: 1 }}></div>
                                <Button variant="contained" onClick={() => {handleOpen()}}>
                                    確認
                                </Button>
                            </Stack>
                        </Box>
                    </Container>
                </Container>
                <PurchaseModal open={open} handleClose={() => {
                    setOpen(false);
                }} 
                />
            </Box>
        </div>
    );
}