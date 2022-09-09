import axios from "axios";
import { useEffect, useState } from "react";
import { Test } from "./components/test";

const testApiUrl = "http://localhost:8000/hogehoge";

function App() {
  return (
    <>
      <Test/>
    </>
  );
}

export default App;
