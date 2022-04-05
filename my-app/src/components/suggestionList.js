import { Box } from "@chakra-ui/react";
import { useData } from "../context/useData";
import SuggestionItemList from "./suggestionsItemList";

export default function SuggestionList(){
    const { items, setItems } = useData();

    return (
        <Box>
            {items?.map((product) => {
                return <SuggestionItemList product={product} />
            })}
        </Box>
    )
}