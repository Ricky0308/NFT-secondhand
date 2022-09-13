import { createContext, useState } from "react";

export const PurchaseInfoContext = createContext({})

export const PurchaseInfoProvider = (props) => {
    const { children } = props;
    const [ token, setTokenId ] = useState();

    return (
        <PurchaseInfoContext.Provider value={{ token, setTokenId }}>
            {children}
        </PurchaseInfoContext.Provider>
    )
}