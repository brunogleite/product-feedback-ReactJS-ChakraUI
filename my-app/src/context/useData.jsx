import React, { useContext, useEffect, useState } from "react";
import data from "../data.json";

const dataContext = React.createContext();

export const DataProvider = ({children}) => {
    const [items, setItems] = useState([]);
    
    

    return(
        <dataContext.Provider value={{items, setItems}}>
            {children}
        </dataContext.Provider>
    )
}

export function useData(){

    useEffect(() => {
        setItems(data.productRequests?.map((item) => {
            return item
        }))
    }, [])


    const { items, setItems} = useContext(dataContext)
    return { items, setItems }
}
