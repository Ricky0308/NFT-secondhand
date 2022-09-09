import "./App.css";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Assignment from "./components/assignment";
import React from "react";

function App() {

  return (
    <div className="App">
      <AppBar position="static" style={{backgroundColor: "#534F69"}}>
        <Typography component="h1" variant="h44" margin={2}>
          hedda-{" "}
        </Typography>
      </AppBar>
      <Assignment />
    </div>
  );
}

export default App;
