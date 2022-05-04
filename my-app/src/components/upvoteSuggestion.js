import { Box , Text, Flex, Button } from "@chakra-ui/react";
import { IoChevronUp } from "react-icons/io5";


export default function UpvoteSuggestion({ number, upVoteClick, active }){
    

    return(
        
            active ? 
            <Box 
                bgColor="secondaryColor"
                color="white" 
                mr="10"
                borderRadius="10px"
                role="group"
                cursor="pointer"
                transition="all 0.3s ease-in-out"
                _hover={{bgColor: "#CFD7FF"}}
                onClick={upVoteClick}
                >
                    <Flex 
                    flexDirection="column" 
                    alignItems="center" 
                    px="2" 
                    pb="2" 
                    pt="3"
                    >
                        <Box>
                            <IoChevronUp color="white"  />
                        </Box>
                        <Text color="white" fontWeight="bold" fontSize="bodyXS">{number}</Text>
                    </Flex>
            </Box> : 
            <Box 
            bgColor="greyishWhite20" 
            mr="10"
            borderRadius="10px"
            role="group"
            cursor="pointer"
            transition="all 0.3s ease-in-out"
            _hover={{bgColor: "#CFD7FF"}}
            onClick={upVoteClick}
            >
                <Flex 
                flexDirection="column" 
                alignItems="center" 
                px="2" 
                pb="2" 
                pt="3"
                >
                    <Box>
                        <IoChevronUp color="secondaryColor"  />
                    </Box>
                    <Text color="darkBlue10" fontWeight="bold" fontSize="bodyXS">{number}</Text>
                </Flex>
        </Box>

      
        
    )
}