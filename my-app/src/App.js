import { Button, Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import FilterTags from "./components/filterTags";
import FilterRoadmap from "./components/filterRoadmap";
import SuggestionList from "./components/suggestionList";
import SuggestionBg from "./components/suggestionBg";

import { Routes } from "react-router-dom";

function App() {
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
