import { Box } from "@chakra-ui/react";
import { useData } from "../context/useData";
import SuggestionItemList from "./suggestionsItemList";

import { Link, Outlet  } from "react-router-dom";
import FeedbackDetail from "../pages/feedbackDetail";

export default function SuggestionList(){
    const { items, setItems } = useData();
    
    return (
        <Box>
            {items?.map((product) => {
                return <Link to={`/feedback/${product.id}`} key={product.id} > 
                        <SuggestionItemList product={product} /> 
                    </Link>  
            })}
        </Box>
        
    )
}