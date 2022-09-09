import axios from "axios";
import { useEffect, useState } from "react";

const testApiUrl = "http://localhost:8000/hogehoge";

export function Test() {
  const [msg, setMsg] = useState();
  useEffect(()=>{
    axios.get(testApiUrl)
      .then((res)=>{
        setMsg(res.data);
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

