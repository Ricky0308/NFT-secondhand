import { createContext, useState } from "react";

export const PurchaseInfoContext = createContext({})

export const PurchaseInfoProvider = (props) => {
    const { children } = props;
    const [ tokenId, setTokenId ] = useState("");
    const [ cover, setCover ] = useState("");
    const [ title, setTitle ] = useState("");

    const context = {
        tokenId, 
        setTokenId,
        cover, 
        setCover,
        title, 
        setTitle,
    }

    return (
        <PurchaseInfoContext.Provider value={context}>
            {children}
        </PurchaseInfoContext.Provider>
    )
}