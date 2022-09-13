import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div style={{ textAlign: "center" }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                marginTop={10}
                marginBottom={5}
            >
                404 Not Found!
            </Typography>
            <Typography
                variant="body"
                //fontWeight="bold"
                marginTop={5}
                marginBottom={5}
            >
                <Link to="/">このページ</Link>からやり直してください
            </Typography>
        </div>
    );
}