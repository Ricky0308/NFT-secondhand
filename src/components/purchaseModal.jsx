import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import Hyousi from "../pic/hyousi.png";
import TradeHandler from "../functions/tradeHandler";

export default function PurchaseModal({ open, handleClose }) {
  const [Buy_price, setText_5] = React.useState("");//購入価格のテキスト保存

  const [value, setValue] = React.useState(30);
  const title = "タイトル";
  const minFee = 200

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setText_5(value);
  };
  return (
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
          borderRadius: "16px",
          boxShadow: 24,
          p: 7,
        }}
      >
        <Typography variant="h4" fontWeight={"bold"} marginBottom={7}>
          {title}を購入します
        </Typography>
        <Container
          maxWidth="md"
          sx={{ bgcolor: "#edf2f7", borderRadius: "16px", marginBottom: 5, padding: 2 }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-start"
            alignItems="center"
            divider={<Divider orientation="vertical" variant="middle" flexItem />}
          >
            <Box sx={{ width: 300, textAlign: "center" }}>
              <img
                src={Hyousi}
                alt=" "
                style={{ width: 150, marginTop: 20, marginBottom: 20 }}
              />

            </Box>
            <Box sx={{ width: 700, textAlign: "left" }}>
              <Typography
                variant="h5"
                marginBottom={5}
                marginLeft={5}
                fontWeight="bold"
              >
                金額
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Slider
                  style={{ width: 350 }}
                  aria-label="Small steps"
                  defaultValue={500}
                  step={50}
                  marks
                  min={minFee}
                  max={1000}
                  valueLabelDisplay="auto"
                  value={value}
                  onChange={handleChange}
                />
              </Box>
            </Box>
          </Stack>
        </Container>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button variant="outlined" onClick={handleClose}>
            キャンセル
          </Button>
          {/* <Button variant="contained" onClick={()=>{console.log(Buy_price)}} className='cta-button mint-nft-button'>購入</Button> */}
          <Button variant="contained" onClick={() => { TradeHandler(Buy_price) }} className='cta-button mint-nft-button'>購入</Button>
        </Stack>
      </Box>
    </Modal>
  );
}