import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import UpvoteSuggestion from "./upvoteSuggestion";
import { IoChatbubbleSharp } from "react-icons/io5";
import DataContext from "../context/data/dataContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";



export default function SuggestionItemList({product}){
    const { upvotes, title, description, category, comments, active } = product;

    const dataContext = useContext(DataContext)
    const { updateVote, sugProductClicked } = dataContext

    //defining the component state level
    const onUpvoteClick = (e) => {

        //getting all the values from every click on each element
        const btn = e.target.tagName === "DIV"
        ? e.target.parentNode 
        : e.target.tagName === "path"
        ? e.target.parentNode.parentNode
        : e.target.parentNode ;

        let newActiveState = !active;
       let upVoteValue = parseInt(btn.textContent)

        console.log(btn)

        updateVote(upVoteValue ,product.id, newActiveState);
        e.stopPropagation();

    }

    //we have to populate activeRequest through click on item of the list component
    const clickPopulateReq = () => {
        let clickedItem = product;
        console.log(clickedItem)
        sugProductClicked(clickedItem)
    }

    return(
        <Box 
        bgColor="white"
        borderRadius="base"
        w="100%"
        maxW={[ "full", "full", "full","825px"]}
        my="5"
        transition="all 0.3s ease-in-out"
        _hover={{boxShadow:'lg'}}
        onClick={clickPopulateReq}
        border="1px solid red">
            <Flex 
            alignItems="center"
            py={[ "6" , "6" , "7", "7"]}
            px={[ "6" , "6" , "8", "8"]}>
                <Flex alignItems="center">
                    <Box onClick={onUpvoteClick}>
                        <UpvoteSuggestion number={upvotes} />
                    </Box>
                    <Box>
                        <Heading 
                        as="h3"
                        fontSize={[ "bodyXS", "bodyXS", "headingXS", "headingXS"]}
                        mb="1">{title}</Heading>
                        <Text mb="3" color="greyColor" fontSize={["bodyXS", "bodyXS", "bodyM", "bodyM"]}>{description}</Text>
                        
                        <Box 
                        py="1.5" px="4" 
                        bgColor="greyishWhite20"
                        borderRadius="base"
                        w="max-content"
                        color="secondaryColor"
                        fontSize={["bodyXS", "bodyXS", null, null]}>{category}
                    </Box>
                    </Box>
                </Flex>
                <Flex alignItems="center" ml="auto">
                    <Box mr="2">
                        <IoChatbubbleSharp color="#CDD2EE" />
                    </Box>
                    <Text color="darkBlue10" fontWeight="bold" fontSize={["bodyXS", "bodyXS", null, null]}>{comments === undefined ? 0 : comments.length }</Text>
                </Flex>
            </Flex>
        </Box>
    )
}