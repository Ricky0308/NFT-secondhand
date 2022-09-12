import { createContext, useState } from "react";

export const ContentInfoContext = createContext({})

export const ContentInfoProvider = (props) => {
    const { children } = props
    const [ content, setContent ] = useState();
    return (
        <ContentInfoContext.Provider value={{content, setContent}}>
            {children}
        </ContentInfoContext.Provider>
    )
}