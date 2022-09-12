import {Card, CardHeader, CardMedia, CardContent, Typography, makeStyles} from "@mui/material";
import Hyousi from "../pic/hyousi.png";
import axios from "axios";
import { BaseAPIUrl } from "../api/urls";
import { useEffect, useState, useContext } from "react";
import { ContentInfoContext } from "../providers/ContentInfoProvider";
import { FetchContentInfo } from "../api/functions";

export const BookCard = ({bookId}) => {
    const [ title, setTitle ] = useState("");
    const [ cover, setCover ] = useState("");
    useEffect(() => {
        const coverUrl = BaseAPIUrl + "content_info/";
        FetchContentInfo(bookId)
            .then((data) => {
                setTitle(data.name);

            })
        
    }, [])

    return(
        <Card>
            <CardMedia
                image={Hyousi}
            >
            </CardMedia>
        </Card>
    )
}
