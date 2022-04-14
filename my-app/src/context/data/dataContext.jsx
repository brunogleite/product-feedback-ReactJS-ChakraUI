import React, {createContext} from "react";

const dataContext = createContext();

export default dataContext;

{/*export function useData(){

    useEffect(() => {
        setItems(data.productRequests?.map((item) => {
            return item
        }))
    }, [])


    const { items, setItems} = useContext(dataContext)
return { items, setItems }*/}

