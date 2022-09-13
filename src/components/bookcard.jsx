import {Card, CardHeader, CardMedia, CardContent, Typography, makeStyles, containerClasses, CardActions, Button} from "@mui/material";
import Hyousi from "../pic/hyousi.png";
import axios from "axios";
import { BaseAPIUrl } from "../api/urls";
import { useEffect, useState, useContext } from "react";
import { ContentInfoContext } from "../providers/ContentInfoProvider";
import { FetchContentInfo } from "../api/functions";
import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";

/** 
 ** 本のIDを入れたら、タイトルとカバーをカード化するコンポーネント
*/
export const BookCard = ({bookId}) => {
    const [ title, setTitle ] = useState("");
    const [ cover, setCover ] = useState("");
    useEffect(() => {
        const coverUrl = BaseAPIUrl + "content_info/";
        FetchContentInfo(bookId)
            .then((data) => {
                setTitle(data.title);
                setCover(data.cover);
            })
        
    }, [])

    return(
        <Card 
            sx={CardCss}
        >
            <CardMedia
                component="img"
                image={cover}
                sx={CardMediaCss}
            />
            <CardContent
                sx={CardContentCss}
            >
                {title}
            </CardContent>
            <CardActions>
                <Button
                    sx={ButtonCss}
                    size="small"
                >売る
                </Button>
            </CardActions>
            {/* <div style={{height : "10px", backgroundColor:"yellow"}}></div> */}
        </Card>
    )
}

const CardContentCss = { 
    width: "70%" ,
    height: {
        xs : "6%"
    },
    //backgroundColor:"pink",
    whiteSpace : "nowrap",
    overflow : "hidden",
    textOverflow : "ellipsis",
    fontSize : "80%",
    margin : "auto",
    marginBottom:0,
}

const CardMediaCss = { 
    width: {
        xs : 180
    },
    height: {
        xs : 180
    },
    margin : "auto",
    // backgroundColor:"pink",
    objectFit : "contain",
}

const CardCss = { 
    width: {
        xs : 200
    },
    height: {
        xs : 260
    },
    margin : "2%",
    padding : "2%",
    //backgroundColor:"blue",
    textAlign : "center",
}

const ButtonCss = {
    margin : "auto", 
    marginBottom : "2%",
}