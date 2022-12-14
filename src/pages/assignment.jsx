import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchContentInfo } from "../api/functions"
// import { assignmentHandler } from "../functions/assignmentHandler";
// import { ethers } from "ethers";

/* Material ui */
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Subtitle from "../components/subtitle";
import theme from "../theme/theme";
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import { ThemeProvider } from "@emotion/react";
import { approved_manga } from "../functions/approved_mangaHandler";
import { isapprove } from "../functions/isapprove_Handler";

export default function Assignment() {
    const { bookId } = useParams()
    const [value, setValue] = React.useState(500);
    const [title, setTitle] = React.useState("");
    const [cover, setCover] = React.useState("");
    const [address, setAddress] = React.useState("");
    const inputRef = React.useRef(null);
    const [inputError, setInputError] = React.useState(false);
    // const [tokenId, setTokenId] = React.useState("");

    useEffect(() => {
        FetchContentInfo(bookId)
            .then((data) => {
                setTitle(data.title);
                setCover(data.cover);
            })
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    // const handleAssignmentButton = () => {
    //     assignmentHandler(bookId, address, value)
    //         .then((res) => {
    //             console.log(`result from assignmentHandler`);
    //             console.log(res);
    //             if (res){
    //                 console.log("parseint");
    //                 console.log(res.data);
    //                 console.log(parseInt(res.data, 16));
    //                 console.log(ethers.utils.formatEther(res.data))
    //                 setTokenId(parseInt(res.value["_hex"], 16));
    //             }
    //         })
    // }

    console.log("necessary info");
    console.log([bookId, address, value]);

    const textChange = (e) => {
        setAddress(e.target.value);
        if (inputRef.current) {
            const ref = inputRef.current;
            if (!ref.validity.valid) {
                setInputError(true);
            } else {
                setInputError(false);
            }
        }
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ textAlign: "left" }}>
                <Subtitle text="????????????" />
                <Box sx={{ backgroundColor: "#edf2f7", padding: 5, height: "100vh" }}>
                    <Container
                        maxWidth="lg"
                        sx={{ bgcolor: "#ffffff", borderRadius: "16px" }}
                    >
                        <Container
                            component="main"
                            maxWidth="xs"
                            mt="5"
                            sx={{ display: "inline" }}
                        >
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="flex-start"
                                alignItems="center"
                                divider={<Divider orientation="vertical" flexItem />}
                            >
                                <Box sx={{ width: 300, textAlign: "center" }}>
                                    <img
                                        src={cover}
                                        alt=" "
                                        style={{ width: 200, marginTop: 50 }}
                                    />
                                    <Typography variant="h5" marginTop={3} marginBottom={5}>
                                        {title}
                                    </Typography>
                                </Box>
                                <Box sx={{ width: 700, padding: 5 }}>
                                    <Typography variant="h5" marginBottom={5} fontWeight="bold" >
                                        ?????????????????????
                                    </Typography>
                                    <Container maxWidth="sm">
                                        <TextField
                                            inputProps={{ minLength: 42, maxLength: 42, minLength: 40, pattern: "0x[a-zA-Z0-9_]+" }}
                                            inputRef={inputRef}
                                            id="address_eth"
                                            fullWidth
                                            label="Adress"
                                            variant="outlined"
                                            value={address}
                                            helperText={inputRef?.current?.validationMessage}
                                            onChange={(e) => textChange(e)}
                                        />
                                    </Container>
                                    <Typography
                                        variant="h5"
                                        marginTop={5}
                                        fontWeight="bold"
                                    >
                                        ??????
                                    </Typography>
                                    <Stack
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={1}
                                        marginBottom={3}
                                    >
                                        <Typography
                                            variant="h5"
                                            fontWeight="bold"
                                        >
                                            {value} ???
                                        </Typography>
                                        <SwapCallsIcon />
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"

                                        >
                                            {(value / 250000).toFixed(4)} Eth
                                        </Typography>
                                    </Stack>
                                    <Container maxWidth="sm">
                                        <Slider
                                            aria-label="Small steps"
                                            defaultValue={500}
                                            step={50}
                                            marks
                                            min={200}
                                            max={1000}
                                            valueLabelDisplay="auto"
                                            value={value}
                                            onChange={handleChange}
                                        />
                                    </Container>
                                    <Stack direction="row" marginTop={5}>
                                        <div style={{ flexGrow: 1 }}></div>

                                        <Button variant="contained" onClick={() => isapprove(bookId)}>??????</Button>
                                        &nbsp;&nbsp;&nbsp;
                                        <Button variant="contained" onClick={handleOpen}>??????</Button>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Container>
                    </Container>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box
                            sx={{
                                textAlign: "center",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: 800,
                                bgcolor: "background.paper",
                                // border: "2px solid #000",
                                borderRadius: "16px",
                                boxShadow: 24,
                                p: 7,
                            }}
                        >
                            <Typography variant="h4" fontWeight={"bold"} marginBottom={7}>
                                {title}?????????
                            </Typography>
                            <Typography variant="h6" component="h2" marginBottom={12}>
                                {address}??????<br />
                                ?????? {value} ???<br />
                                <SwapCallsIcon /><br />
                                {(value / 250000).toFixed(4)} Eth<br />
                                ????????????????????????
                            </Typography>
                            <Stack
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <Button variant="outlined" onClick={(handleClose)}>
                                    ???????????????
                                </Button>
                                <Button variant="contained" onClick={() => approved_manga(address, bookId, value / 250000)}>??????</Button>
                            </Stack>
                        </Box>
                    </Modal>
                </Box>
            </div>
        </ThemeProvider>
    );
}

