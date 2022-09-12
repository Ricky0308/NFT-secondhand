import {Card, CardHeader, CardMedia, CardContent, Typography, makeStyles} from "@mui/material";
import Hyousi from "../pic/hyousi.png";
import axios from "axios";
import { BaseAPIUrl } from "../api/urls";
import { useEffect, useState, useContext } from "react";
import { ContentInfoContext } from "../providers/ContentInfoProvider";


export const BookCard = ({bookId}) => {
    const [ content, setContent ] = useState("")
    useEffect(() => {
        const requestConfig = {
            params : {id : bookId}
        }
        const coverUrl = BaseAPIUrl + "content_info/";
        axios.get(coverUrl, requestConfig)
            .then((res) => {
                setContent(res.data);
                console.log(content);
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
