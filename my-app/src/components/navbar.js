import { Select, Box, Button, Flex, useBoolean, Heading, Divider  } from '@chakra-ui/react';
import { useState } from 'react';

import IconSuggestion from "./iconSuggestion"

export default function Navbar(){
    const [isOpen, setIsOpen] = useBoolean();
    const [textContent, setTextContent] = useState("")

    return(
        <Flex 
        borderRadius="base"
        bgColor="darkBlue20"
        py="3.5"
        pl="6"
        pr="4"
        alignItems="center"
        maxW="825px"
        >
            <Flex 
            alignItems="center"
            color="white">
                <Box>
                    6 Suggestions
                </Box>
                <Flex 
                ml="10" 
                onClick={setIsOpen.toggle} 
                cursor="pointer"
                position="relative"
                alignItems="center">
                    Sort By :
                    <p> {textContent} </p>
                    {isOpen
                    ? <Box 
                        pos="absolute"
                        top="10"
                        left="0"
                        bgColor="white"
                        color="greyColor"
                        borderRadius="base"
                        w="255px"
                        >
                        
                        <Box 
                        onClick={(e) => setTextContent(e.currentTarget.textContent)}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6">
                            <p>Most Upvotes</p>
                        </Box>
                        <Divider />
                        <Box 
                        onClick={(e) => setTextContent(e.currentTarget.textContent)}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6">
                            <p>Least Upvotes</p>
                        </Box>
                        <Divider />
                        <Box 
                        onClick={(e) => setTextContent(e.currentTarget.textContent)}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6">
                        <p>Most Comments</p>
                        </Box>
                        <Divider />
                        <Box 
                        onClick={(e) => setTextContent(e.currentTarget.textContent)}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6">
                        <p>Least Comments</p>
                        </Box>

                    </Box>
                    : ""
                    }
                </Flex>
            </Flex>
            <Box ml="auto">
                <Button size="md" variant='primary'>
                    Add feeedback
                </Button>
            </Box>
        </Flex>
    )
}