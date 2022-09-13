import React from "react";
import { BookCard } from "../components/bookcard";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/system";

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
            <Container
                sx={{
                    textAlign : "center"
                }}
            >
                <Box
                    component="span"
                    sx={{
                    }}
                >
                    あんたの本棚
                </Box>
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