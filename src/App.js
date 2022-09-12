import "./App.css";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Test from "./Test";
import Navbar from "./pages/navbar";
import Assignment from "./pages/assignment";
import Purchase from "./pages/purchase";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: "#534F69" }}>
      <Navbar />
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route path={`/test`} element={<Test />} />
          <Route path={`/a`} element={<Assignment />} />
          <Route path={`/p`} element={<Purchase />} />
          {/* <Route path={`*`} element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
