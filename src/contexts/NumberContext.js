import { createContext } from "react";

const NumberContext = createContext();

export const NumberProvider = ({children}) => {
    return (
        <NumberContext.Provider value={{numberTest: 42}}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumberContext;