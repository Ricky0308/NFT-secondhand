import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchContentInfo } from "../api/functions"

/* Material ui */
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Hyousi from "../pic/hyousi.png";
import Modal from "@mui/material/Modal";

import Subtitle from "../components/subtitle";

export default function Assignment() {
    const { bookId } = useParams()
    const [value, setValue] = React.useState(500);
    const [ title, setTitle ] = React.useState("");
    const [ cover, setCover ] = React.useState("");
    const [address, setAddress] = React.useState("");

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ textAlign: "left" }}>
            <Subtitle text= "譲渡する"/>
            {/* <Typography
                variant="h3"
                fontWeight="bold"
                marginTop={5}
                marginBottom={5}
                marginLeft={10}
            >
                譲渡する
            </Typography> */}
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
                                <Typography variant="h5" marginBottom={5} fontWeight="bold">
                                    相手のアドレス
                                </Typography>
                                <TextField
                                    id="address"
                                    fullWidth
                                    label="Adress"
                                    variant="outlined"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <Typography
                                    variant="h5"
                                    marginTop={5}
                                    marginBottom={5}
                                    fontWeight="bold"
                                >
                                    金額
                                </Typography>
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
                                <Stack direction="row" marginTop={5}>
                                    <div style={{ flexGrow: 1 }}></div>
                                    <Button variant="contained" onClick={handleOpen}>
                                        譲渡
                                    </Button>
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
                            {title}の譲渡
                        </Typography>
                        <Typography variant="h6" component="h2" marginBottom={12}>
                            {address}宛に{value}円で譲渡しますか？
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            <Button variant="outlined" onClick={handleClose}>
                                キャンセル
                            </Button>
                            <Button variant="contained">譲渡</Button>
                        </Stack>
                    </Box>
                </Modal>
            </Box>
        </div>
    );
}