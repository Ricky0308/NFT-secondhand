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
                    <CardActions>
                        <Stack
                            direction="row"
                            marginLeft={2.5}
                            spacing={2}>
                            <Button variant="contained">
                                読む
                            </Button>
                            <Button variant="contained" href={`/assignment/${bookId}`}>
                                売る
                            </Button>
                        </Stack>
                    </CardActions>
                    {/* <div style={{height : "10px", backgroundColor:"yellow"}}></div> */}
                </Card>
            }
        </>
    )
}

const CardContentCss = {
    width: "70%",
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
        xs: 200
    },
    height: {
        xs: 270
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