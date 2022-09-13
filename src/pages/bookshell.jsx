import React from "react";
import { BookCard } from "../components/bookcard";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import Subtitle from "../components/subtitle";

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
        </Box>
        </>
    )
}


const ContainerCss = {
    display : "flex", 
}