import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Hyousi from "../pic/hyousi.png";

export default function Assignment() {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div style={{ textAlign: "left" }}>
      <Typography variant="h3" fontWeight="bold">
        譲渡する
      </Typography>
      <Box sx={{ backgroundColor: "#edf2f7", padding: 5 }}>
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
              <Box sx={{ width: 300, textAlign: "center"}}>
                <img src={Hyousi} alt=" " style={{ width: 200 }} />
              </Box>
              <Box sx={{ width: 700 }}>
                <Typography variant="h5">相手のアドレス</Typography>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Adress"
                  variant="outlined"
                />
                <Typography variant="h5">金額</Typography>
                <Slider
                  aria-label="Small steps"
                  defaultValue={500}
                  getAriaValueText={valuetext}
                  step={50}
                  marks
                  min={200}
                  max={1000}
                  valueLabelDisplay="auto"
                  value={value}
                  onChange={handleChange}
                />
                <Stack direction="row">
                  <div style={{ flexGrow: 1 }}></div>
                  <Button variant="contained">譲渡</Button>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Container>
      </Box>
    </div>
  );
}
