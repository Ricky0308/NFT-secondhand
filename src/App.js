import "./App.css";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Test from "./Test";
import Navbar from "./pages/navbar";
import Assignment from "./pages/assignment";
import Purchase from "./pages/purchase";
import Publish from "./pages/publish";
import Error404 from "./pages/error404";
import Confirm from "./pages/confirm_transfer";
import React from "react";
import Bookshell from "./pages/bookshell";
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
          <Route path={`/`} element={<Assignment />} />
          <Route path={`/assignment/:bookId`} element={<Assignment />} />
          <Route path={`/purchase`} element={<Purchase />} />
          <Route path={`/publish`} element={<Publish />} />
          <Route path={`/bookshell`} element={<Bookshell />} />
          <Route path={`*`} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
