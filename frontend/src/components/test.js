import axios from "axios";
import { useEffect, useState } from "react";

const testApiUrl = "http://localhost:8000/3/cover";

export function Test() {
  const [msg, setMsg] = useState();
  useEffect(()=>{
    axios.get(testApiUrl)
      .then((res)=>{
        setMsg(res.data.message);
      })
      .catch((e)=>{
        console.log("バックエンドとは繋がっていません");
      });
  },[])
  return (
    <div>
      { msg || "バックエンドと繋がっていません" }
    </div>
  );
}