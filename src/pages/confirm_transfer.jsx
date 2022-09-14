import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Confirm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [address, setAddress] = React.useState("");

    return (
        <div style={{ textAlign: "left" }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                marginTop={5}
                marginBottom={5}
                marginLeft={10}
            >
                譲渡されたNFTを確認
            </Typography>
            <Box sx={{ backgroundColor: "#edf2f7", padding: 5, height: "100vh" }}>
                <Container
                    maxWidth="md"
                    sx={{ bgcolor: "#ffffff", borderRadius: "16px" }}
                >
                    <Container
                        component="main"
                        sx={{ display: "inline" }}
                    >
                        <Box p={5}>
                            <Box height={300}>
                                <Typography variant="h5" marginBottom={5} fontWeight="bold">
                                    トークンID
                                </Typography>
                                <TextField
                                    id="tokenId"
                                    fullWidth
                                    label="Token ID"
                                    variant="outlined"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Box>
                            <Stack direction="row" marginTop={5}>
                                <div style={{ flexGrow: 1 }}></div>
                                <Button variant="contained" onClick={handleOpen}>
                                    確認
                                </Button>
                            </Stack>
                        </Box>
                    </Container>
                </Container>

            </Box>
        </div>
    );
}