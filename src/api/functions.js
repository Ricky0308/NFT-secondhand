import axios from "axios";
import { BaseAPIUrl } from "./urls";

const fileApiUrl = BaseAPIUrl + "content_info/"

/*
* @param{ number || string } id : バックエンドから引っ張るコンテンツのid
* @return{object} : {book_id : 本のid, title : なまえ, file : pdfファイル, cover : 表紙}
*/
export async function FetchContentInfo(id=1){
    const requestConfig = {
        params : {id : id}
    }
    const { data } = await axios.get(fileApiUrl, requestConfig);
    console.log(data);
    return data 
}