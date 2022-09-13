import React from "react";
import { Typography } from "@mui/material";

export default function Subtitle(props){

    return (
        <div>
            <Typography
                variant="h4"
                fontWeight="bold"
                marginTop={5}
                marginBottom={5}
                marginLeft={10}
                >   
                {props.text}
            </Typography>
        </div>
    );
}
