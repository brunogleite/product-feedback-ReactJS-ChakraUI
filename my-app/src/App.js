import { Button, Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import FilterTags from "./components/filterTags";
import FilterRoadmap from "./components/filterRoadmap";
import SuggestionList from "./components/suggestionList";
import SuggestionBg from "./components/suggestionBg";
import { useEffect, useContext } from "react";
import AddComment from "./components/addComment";

import DataContext from "./context/data/dataContext";


function App() {

  const dataContext = useContext(DataContext);
  const { getData } = dataContext;

  useEffect(() => {
    getData();

  }, []);

  return (
      <Flex minH="100vh" bgColor="greyishWhite10">
        <Box 
        py="24" 
        pb="32" 
        maxW={[ "689px", "689px", "689px", "1110px"]} 
        w="full" 
        margin="0 auto" 
        border="1px solid red" 
        display={[ "block", "block", "block", "flex"]}>
          <Box  
          border="1px solid blue" 
          display={[ "flex", "flex", "flex", "block"]} 
          alignItems={[null, "center", "center", null]}
          columnGap="10px" >
            <Box w={["full" , "33%", "33%", "full"]} position="relative">
              <SuggestionBg />
            </Box>
            <Box display={["none", "block"]} w={["33%" , "33%", "33%", "full"]}>
              <FilterTags />
            </Box>
            <Box display={["none", "block"]} w={["33%" , "33%", "33%", "full"]}>
              <FilterRoadmap />
            </Box>
          </Box>
          <Box w="full" border="1px solid blue">
            <Navbar />
            <SuggestionList />
            <AddComment/>
          </Box>
        </Box>
      </Flex>
  );
}

export default App;
