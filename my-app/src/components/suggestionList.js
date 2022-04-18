import { Box } from "@chakra-ui/react";
import DataContext from '../context/data/dataContext';
import SuggestionItemList from "./suggestionsItemList";

import { Link, Outlet  } from "react-router-dom";
import FeedbackDetail from "../pages/feedbackDetail";
import { useContext } from "react";

export default function SuggestionList(){
    const dataContext = useContext(DataContext);
    const { requests, activeTag } = dataContext

    //apply component logic with activeTag and only show that matches the activeTag
    var lowerActiveTag = activeTag.toLowerCase();

    var filtered = lowerActiveTag === "all"  ? requests : requests?.filter((item) => item.category === lowerActiveTag)
    console.log(filtered)

    return (
        <Box>
            {filtered?.map((product) => {
               return  <Link to={`/comments/${product.id}`} key={product.id} > 
                            <SuggestionItemList product={product} />
                       </Link>  
            })}
        </Box>
        
    )
}