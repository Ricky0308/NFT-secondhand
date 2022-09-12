import {Card, CardHeader, CardMedia, CardContent, Typography, makeStyles} from "@mui/material";
import Hyousi from "../pic/hyousi.png";
import axios from "axios";
import { BaseAPIUrl } from "../api/urls";
import { useEffect, useState } from "react";

export const BookCard = ({bookId}) => {

    const [image, setImage] = useState("");
    useEffect(() => {
        const requestConfig = {
            params : {id : bookId}
        }
        const coverUrl = BaseAPIUrl + "content_info/";
        axios.get(coverUrl, requestConfig)
            .then((res) => {
                console.log(res);
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
