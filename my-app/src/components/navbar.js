import { Select, Box, Button, Flex, useBoolean, Text, Divider  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import dataContext from '../context/data/dataContext';

export default function Navbar({req}){
    const [isOpen, setIsOpen] = useBoolean();

    const DataContext = useContext(dataContext);
    const { updateSortList, sortByFilter } = DataContext;


    const onClickSort = (e) => {
        let newCurDisplay = e.target.value
        ? e.target.value
        : e.target.parentNode.value;
    
        updateSortList(newCurDisplay);
      };

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
                <Box display={["none" , "none" , "block", "block"]}>
                    {req.length} Suggestions
                </Box>
                <Flex 
                ml={[null, null, "10"]} 
                onClick={setIsOpen.toggle} 
                cursor="pointer"
                position="relative"
                alignItems="center">
                    <Text>Sort By : </Text>
                    <Text> {sortByFilter} </Text>
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
                        
                        <Button 
                        onClick={onClickSort}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6"
                        value="Most Upvotes">
                            <p>Most Upvotes</p>
                        </Button>
                        <Divider />
                        <Button 
                        onClick={onClickSort}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6"
                        value="Least Upvotes">
                            <p>Least Upvotes</p>
                        </Button>
                        <Divider />
                        <Button 
                        onClick={onClickSort}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6"
                        value="Most Comments">
                        <p>Most Comments</p>
                        </Button>
                        <Divider />
                        <Button 
                        onClick={onClickSort}
                        _hover={{color: "primaryColor"}}
                        py="3"
                        pl="6"
                        value="Least Comments">
                        <p>Least Comments</p>
                        </Button>

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