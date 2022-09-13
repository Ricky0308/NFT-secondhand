import React from "react";
import { BookCard } from "../components/bookcard";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import Subtitle from "../components/subtitle";
import { useNavigate } from "react-router-dom";
import { get_nftHandler } from "../functions/get_nftHandler"

import {Viewer, Worker} from '@react-pdf-viewer/core';
import {SpecialZoomLevel} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import contract from "../contracts/abi.json";
import { ethers } from "ethers";
const contractAddress = "0xb9c35E386528047Aaa810F6E3d2521a202E7872F";
const abi = contract.abi;

const AddressToContentsId = () => {
    return [1, 100]
}

export default function Bookshell(){
    const [ bookIdArray, setBookIdArray ] = useState([]);

    /* モーダルの状態管理 */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTab) => [],  
    });

    console.log("ここまで");
    // useEffect(()=>{

    //     get_nftHandler()
    //         .then((items) => {
    //             setBookIdArray(items);
    //             console.log(items);
    //         })
    // }, [])


    return(
        <div>
        <Subtitle text = "本棚"/>
        <Box sx={{ width: 300, textAlign: "center" }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                  <div style={{ 
                    width: '100%',
                    height: '450px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop:'auto',
                    marginBottom:'auto',
                  }}>
                    <Viewer
                      fileUrl={`${process.env.PUBLIC_URL}/sample_manga.pdf`}
                      defaultScale ={SpecialZoomLevel.PageFit}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </div>
                </Worker>
              </Box>
        {/* <Box sx={{ backgroundColor: "#edf2f7", padding: 5, height: "100vh" }}>
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
        </Box> */}
        </div>
    )
}


