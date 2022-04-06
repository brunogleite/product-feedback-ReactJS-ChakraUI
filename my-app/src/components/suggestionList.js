import { Box } from "@chakra-ui/react";
import { useData } from "../context/useData";
import SuggestionItemList from "./suggestionsItemList";

import { Link, Route, Routes } from "react-router-dom";

export default function SuggestionList(){
    const { items, setItems } = useData();

    return (
        <Box>
            {items?.map((product) => {
                return  <Route path="new" element={<SuggestionItemList />} > <SuggestionItemList product={product} /> </Route> 
            })}
        </Box>
    )
}