import "./App.css";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Assignment from "./components/assignment";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <AppBar position="static" style={{ backgroundColor: "#534F69" }}>
        <Typography component="h1" variant="h44" margin={2}>
          Secondly
        </Typography>
      </AppBar>
          <BrowserRouter>
            <Routes>
              <Route path={`/`} element={<Assignment />} />
              {/* <Route path={`*`} element={<Error />} /> */}
            </Routes>
          </BrowserRouter>

     
      
    </div>
  );
}

export default App;
