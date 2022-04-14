import { Box } from "@chakra-ui/react";
import DataContext from '../context/data/dataContext';
import SuggestionItemList from "./suggestionsItemList";

import { Link, Outlet  } from "react-router-dom";
import FeedbackDetail from "../pages/feedbackDetail";
import { useContext } from "react";

export default function SuggestionList(){
    const dataContext = useContext(DataContext);
    const { requests, activeTag } = dataContext

    
    
    return (
        <Box>
            {requests?.map((product) => {
               return <Link to={`/feedback/${product.id}`} key={product.id} > 
                        <SuggestionItemList product={product} /> 
                    </Link>  
            })}
        </Box>
        
    )
}