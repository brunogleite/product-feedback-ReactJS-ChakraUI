import { Box, Heading, Flex, Text, Input, Select, Textarea, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const AddFeedback = () => {

   return(
   <Flex bgColor="greyishWhite10" minH="100vh" alignItems="center" justifyContent="center">
       <Box>
       <Box pb="10">
           <Link to="/" color="greyColor">Go Back </Link>
        </Box>
        <Box bgColor="white" borderRadius="base" pt="12" pb="10" px="12"  >
            <Box maxW="456px" w="full" marginX="auto">
                <Heading as="h1" color="darkBlue10" mb="10">Create New Feedback</Heading>
                <Box>
                    <Heading as="h3" fontSize="bodyS" fontWeight="bold" color="darkBlue10">Feedback Title</Heading>
                    <Text color="greyColor" fontSize="bodyS" pt="2" pb="4">Add a short, descriptive headline</Text>
                    <Input />
                </Box>
                <Box mt="6">
                    <Heading as="h3" fontSize="bodyS" fontWeight="bold" color="darkBlue10">Category</Heading>
                    <Text color="greyColor" fontSize="bodyS" pt="2" pb="4">Choose a category for your feedback</Text>
                    <Select>
                        <option value='feature'>Feature</option>
                        <option value='implementation'>Implementation</option>
                    </Select>
                </Box>
                <Box mt="6">
                    <Heading as="h3" fontSize="bodyS" fontWeight="bold" color="darkBlue10">Feedback Detail</Heading>
                    <Text color="greyColor" fontSize="bodyS" pt="2" pb="4">Include any specific comments on what should be improved, added, etc.</Text>
                    <Textarea />
                </Box>
                <Box mt="8">
                    <Button size="md" variant="dark"> Cancel </Button>
                    <Button size="md" variant="primary" ml="4"> Add Feedback </Button>
                </Box>
            </Box>
        </Box>
       </Box>
       
    </Flex>) 
}

export default AddFeedback;