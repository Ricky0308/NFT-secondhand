import React from "react";
import { BookCard } from "../components/bookcard";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import { get_nftHandler } from "../functions/get_nftHandler";


const AddressToContentsId = () => {
    return [1, 100]
}

export default function Bookshell(){
    const [ bookIdArray, setBookIdArray ] = useState([]);
    useEffect(()=>{
        get_nftHandler()
            .then((items) => {
                setBookIdArray(items);
            })
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


