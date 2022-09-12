import axios from "axios";
import { useEffect, useState } from "react";

const testApiUrl = "http://localhost:8000/cover/?name=sample";

export function Test() {
  const [msg, setMsg] = useState();
  useEffect(()=>{
    axios.get(testApiUrl)
      .then((res)=>{
        // setMsg(res.data.name);
        // setMsg(res.data.content);
        setMsg(res.data.cover);
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