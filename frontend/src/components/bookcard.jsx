import {Card, CardHeader, CardMedia, CardContent, Typography, makeStyles} from "@mui/material";
import Hyousi from "../pic/hyousi.png";
import axios from "axios";
import BaseAPIUrl from "../api/urls"
import { useEffect, useState } from "react";

export const BookCard = (book_id) => {

    const [image, setImage] = useState("");
    useEffect(() => {
        
        axios.get(BaseAPIUrl)
            .then()
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
