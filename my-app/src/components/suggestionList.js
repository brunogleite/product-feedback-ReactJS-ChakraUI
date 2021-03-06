import { Box, Skeleton } from "@chakra-ui/react";
import DataContext from '../context/data/dataContext';
import SuggestionItemList from "./suggestionsItemList";

import { Link } from "react-router-dom";
import { useContext } from "react";

export default function SuggestionList({isLoading}){
    const dataContext = useContext(DataContext);
    const { requests, activeTag, sortByFilter } = dataContext;

    //apply component logic with activeTag and only show that matches the activeTag
    var lowerActiveTag = activeTag.toLowerCase();

    var filtered = lowerActiveTag === "all"  ? requests : requests?.filter((item) => item.category === lowerActiveTag)
    console.log(filtered)

    switch (sortByFilter) {
        case 'Most Upvotes':
          filtered.sort((a, b) =>
            !a.upvotes || !b.upvotes ? 1 : b.upvotes - a.upvotes
          );
          break;
        case 'Least Upvotes':
          filtered.sort((a, b) =>
            !a.upvotes || !b.upvotes ? -1 : a.upvotes - b.upvotes
          );
          break;
        case 'Most Comments':
          filtered.sort((a, b) =>
            !a.comments || !b.comments ? 1 : b.comments.length - a.comments.length
          );
          break;
        case 'Least Comments':
          filtered.sort((a, b) =>
            !a.comments || !b.comments
              ? -1
              : a.comments.length - b.comments.length
          );
          break;
        default:
          filtered.sort((a, b) => b.upvotes - a.upvotes);
      }

    return (
        <Box p={["6", "6", null, null]} >
            {filtered?.map((product) => {
              return <Skeleton isLoaded>
                        <Link to={`/comments/${product.id}`} key={product.id} > 
                          <SuggestionItemList product={product} />
                       </Link>
                    </Skeleton>
            })}
        </Box>
    )
}