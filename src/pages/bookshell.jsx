import React from "react";
import { BookCard } from "../components/bookcard";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import Subtitle from "../components/subtitle";
import { useNavigate } from "react-router-dom";

import contract from "../contracts/abi.json";
import { ethers } from "ethers";
const contractAddress = "0xb9c35E386528047Aaa810F6E3d2521a202E7872F";
const abi = contract.abi;

const AddressToContentsId = () => {
    return [1, 100]
}

export default function Bookshell(){

    const [bookIdArray, setBookIdArray] = useState([]);
    useEffect(()=>{
        setBookIdArray(AddressToContentsId());

    }, [])


    return(
        <>
        <Subtitle text = "本棚"/>
        <Box sx={{ backgroundColor: "#edf2f7", padding: 5, height: "100vh" }}>
            <Container
                sx={{
                    textAlign : "center"
                }}
            >
                <Container
                    sx={{
                        display : "flex",
                        flexWrap : "wrap",
                        // backgroundColor : "blue",
                        boxShadow : "1 gray",
                        borderRadius : "8px gray",
                    }}
                    maxWidth="lg"
                >
                    {bookIdArray.map((id) => <BookCard key={id} bookId={id}/>)}
                </Container>
            </Container>
        </Box>
        </>
    )
}






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

        // setText_7(items);
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