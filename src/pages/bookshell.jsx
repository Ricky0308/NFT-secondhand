import React from "react";
import { BookCard } from "../components/bookcard";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import Subtitle from "../components/subtitle";
import { useNavigate } from "react-router-dom";
import get_nftHandler from "../functions/get_nftHandler";


const AddressToContentsId = () => {
    return [1, 100]
}

export default function Bookshell(){
    const [ bookIdArray, setBookIdArray ] = useState([]);
    // useEffect(()=>{
    //     setBookIdArray(AddressToContentsId());
    //     get_nftHandler()
    //         .then((items) => {
    //             setBookIdArray(items);
    //         })
    // }, [])


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


