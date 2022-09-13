import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MintHandler, { mint_nftHandler } from "../functions/mint_nefHandler"
export default function Publuish() {
    const [book_num, setNum] = React.useState('');
    const handleChange = (event) => {
        setNum(event.target.value);
    };

    return (
        <div style={{ textAlign: "left" }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                marginTop={5}
                marginBottom={5}
                marginLeft={10}
            >
                発行する
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
                            <Box height={150} marginTop={10}>
                                <Stack direction="row" alignItems="center" marginTop={0}>
                                
                                    <Typography variant="h5" marginLeft={10} marginRight={7} fontWeight="bold">
                                        発行巻数
                                    </Typography>
            
                                    <FormControl size={500}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={book_num}
                                            //label="巻数"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={1}> 1 </MenuItem>
                                            <MenuItem value={2}> 2 </MenuItem>
                                            <MenuItem value={3}> 3 </MenuItem>
                                            <MenuItem value={4}> 4 </MenuItem>
                                            <MenuItem value={5}> 5 </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Box>
                            <Stack direction="row">
                                <div style={{ flexGrow: 1 }}></div>
                                <Button variant="contained" onClick={()=> MintHandler(book_num)  }  >
                                    発行
                                </Button>
                            </Stack>
                        </Box>
                    </Container>
                </Container>

            </Box>
        </div>
    );
}