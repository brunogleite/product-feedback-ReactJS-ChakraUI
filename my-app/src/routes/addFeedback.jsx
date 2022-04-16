import { Box, Heading, Flex, Text, Input, Select, Textarea, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import dataContext  from "../context/data/dataContext";

const AddFeedback = () => {

    const DataContext = useContext(dataContext);
    const { addComments, requests } = DataContext

    console.log(requests)

    //defining the state value for the Input, Select ,Textarea
    //then making an object that goes to the array of comments
    
    //we need to create three component level states
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [detail, setDetail] = useState("");

    console.log("title Message: " + title)

    /*{
        id: num,
        active: boolean,
        category: "",
        comments : [],
        description: "",
        status: "",
        title: "",
        upvotes: num,
    }*/

   return(
   <Flex bgColor="greyishWhite10" minH="100vh" alignItems="center" justifyContent="center">
       <Box>
       <Box pb="10">
           <Link to="/" color="greyColor">Go Back </Link>
        </Box>
        <form action="submit">
            <Box bgColor="white" borderRadius="base" pt="12" pb="10" px="12"  >
                <Box maxW="456px" w="full" marginX="auto">
                    <Heading as="h1" color="darkBlue10" mb="10">Create New Feedback</Heading>
                    <Box>
                        <Heading as="h3" fontSize="bodyS" fontWeight="bold" color="darkBlue10">Feedback Title</Heading>
                        <Text color="greyColor" fontSize="bodyS" pt="2" pb="4">Add a short, descriptive headline</Text>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Box>
                    <Box mt="6">
                        <Heading as="h3" fontSize="bodyS" fontWeight="bold" color="darkBlue10">Category</Heading>
                        <Text color="greyColor" fontSize="bodyS" pt="2" pb="4">Choose a category for your feedback</Text>
                        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value='ui'>UI</option>
                            <option value='ux'>UX</option>
                            <option value='enhancement'>Enhancement</option>
                            <option value='bug'>Bug</option>
                            <option value='feature'>Feature</option>
                        </Select>
                    </Box>
                    <Box mt="6">
                        <Heading as="h3" fontSize="bodyS" fontWeight="bold" color="darkBlue10">Feedback Detail</Heading>
                        <Text color="greyColor" fontSize="bodyS" pt="2" pb="4">Include any specific comments on what should be improved, added, etc.</Text>
                        <Textarea  value={detail} onChange={(e) => setDetail(e.target.value)} />
                    </Box>
                    <Box mt="8">
                        <Button size="md" variant="dark"> Cancel </Button>
                        <Button size="md" variant="primary" ml="4" onClick={() => addComments(title, category, detail)}> Add Feedback </Button>
                    </Box>
                </Box>
            </Box>
        </form>
        
       </Box>
       
    </Flex>) 
}

export default AddFeedback;