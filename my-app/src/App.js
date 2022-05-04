import { Button, Box, Flex, Skeleton } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import FilterTags from "./components/filterTags";
import FilterRoadmap from "./components/filterRoadmap";
import SuggestionList from "./components/suggestionList";
import SuggestionBg from "./components/suggestionBg";
import { useEffect, useContext, useState } from "react";
import AddComment from "./components/addComment";

import DataContext from "./context/data/dataContext";


function App() {

  const dataContext = useContext(DataContext);
  const [isLoading, setIsLoading ] = useState(false);
  const { getData, requests } = dataContext;
  

  useEffect(() => {
    setIsLoading(true);

    getData();

    setIsLoading(false)

  }, []);

  return (
      <Flex minH="100vh" bgColor="greyishWhite10">
        <Box 
        py="24" 
        pb="32" 
        maxW={[ "689px", "689px", "689px", "1110px"]} 
        w="full" 
        margin="0 auto" 
        display={[ "block", "block", "block", "flex"]}>
          <Box  
          display={[ "flex", "flex", "flex", "block"]} 
          alignItems={[null, "center", "center", null]}
          columnGap="10px" >
            <Skeleton isLoaded>
              <Box w={["full" , "33%", "33%", "full"]} position="relative">
                <SuggestionBg />
              </Box>
            </Skeleton>
            <Skeleton isLoaded>
              <Box display={["none", "block"]} w={["33%" , "33%", "33%", "full"]}>
                <FilterTags />
              </Box>
            </Skeleton>
            
            <Skeleton isLoaded>
              <Box display={["none", "block"]} w={["33%" , "33%", "33%", "full"]}>
                <FilterRoadmap />
              </Box>
            </Skeleton>
          </Box>
          <Box w="full">
            <Skeleton isLoaded>
              <Navbar req={requests} />
            </Skeleton>
            <SuggestionList isLoading={isLoading} />
          </Box>
        </Box>
      </Flex>
  );
}

export default App;
