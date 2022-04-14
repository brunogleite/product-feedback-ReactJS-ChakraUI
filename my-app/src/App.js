import { Button, Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import FilterTags from "./components/filterTags";
import FilterRoadmap from "./components/filterRoadmap";
import SuggestionList from "./components/suggestionList";
import SuggestionBg from "./components/suggestionBg";
import { useEffect, useContext } from "react";

import DataContext from "./context/data/dataContext";


function App() {

  const dataContext = useContext(DataContext);
  const { getData } = dataContext;

  useEffect(() => {
    getData();

  }, []);

  return (
      <Flex minH="100vh" bgColor="greyishWhite10">
        <Flex  py="24" pb="32" maxW="1110px" w="full" margin="0 auto">
        <Box pr="8">
          <SuggestionBg />
          <FilterTags />
          <FilterRoadmap />
        </Box>
        <Box w="full">
          <Navbar />
          <SuggestionList />
        </Box>
        </Flex>
      </Flex>
  );
}

export default App;
