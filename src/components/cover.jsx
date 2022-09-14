import { Card, CardMedia, CardContent, CardActions, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { FetchContentInfo } from "../api/functions";

/** 
 ** 本のIDを入れたら、タイトルとカバーをカード化するコンポーネント
*/
export const BookCard = ({ bookId }) => {
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    useEffect(() => {
        FetchContentInfo(bookId)
            .then((data) => {
                setTitle(data.title);
                setCover(data.cover);
            })

    }, [])

    return (
        <>
            {title &&
                <Card sx={CardCss}>
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
                    
                </Card>
            }
        </>
    )
}

const CardContentCss = {
    width: "100%",
    height: {
        xs: "6%"
    },
    //backgroundColor:"pink",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "80%",
    margin: "auto",
    marginBottom: 0,
}

const CardMediaCss = {
    width: {
        xs: 180
    },
    height: {
        xs: 180
    },
    margin: "auto",
    // backgroundColor:"pink",
    objectFit: "contain",
}

const CardCss = {
    width: {
        xs: 180
    },
    height: {
        xs: 200
    },
    margin: "2%",
    padding: "2%",
    //backgroundColor:"blue",
    textAlign: "center",
}

// const ButtonCss = {
//     margin : "auto", 
//     marginBottom : "2%",
// }