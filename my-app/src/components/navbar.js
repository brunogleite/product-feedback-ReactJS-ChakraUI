import { Select, Box, Button, Flex, useBoolean, Text, Divider  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import dataContext from '../context/data/dataContext';

export default function Navbar({req}){
    const [isOpen, setIsOpen] = useBoolean();
    const [textContent, setTextContent] = useState("Most Upvotes");

    const DataContext = useContext(dataContext);
    const { updateSortList } = DataContext;

    const onClickSort = (e) => {
        setTextContent(e.currentTarget.textContent)
        updateSortList(textContent)
    }

    return(
        <Flex 
        borderRadius={[null, null, null,"base"]}
        bgColor="darkBlue20"
        py="3.5"
        pl="6"
        pr="4"
        alignItems="center"
        maxW={[ "full", "full", "full","825px"]}
        >
            <Flex 
            alignItems="center"
            color="white">
                <Box>
                    {req.length} Suggestions
                </Box>
                <Flex 
                ml="10" 
                onClick={setIsOpen.toggle} 
                cursor="pointer"
                position="relative"
                alignItems="center">
                    <Text>Sort By : </Text>
                    <Text> {textContent} </Text>
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
                        onClick={onClickSort}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6">
                            <p>Most Upvotes</p>
                        </Box>
                        <Divider />
                        <Box 
                        onClick={onClickSort}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6">
                            <p>Least Upvotes</p>
                        </Box>
                        <Divider />
                        <Box 
                        onClick={onClickSort}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6">
                        <p>Most Comments</p>
                        </Box>
                        <Divider />
                        <Box 
                        onClick={onClickSort}
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
                <Link to="/addfeedback">
                    <Button size="md" variant='primary'>
                        Add feeedback
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}