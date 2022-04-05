import { Button } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import FilterTags from "./components/filterTags";
import FilterRoadmap from "./components/filterRoadmap";
import SuggestionList from "./components/suggestionList";

function App() {
  return (
    <div>
     <h1>Hello Boa dasda!</h1>
     <Button size="md" variant='primary'>
        Welcome
      </Button>
      <FilterTags />
      <Navbar />
      <FilterRoadmap />
      <SuggestionList />
    </div>
  );
}

export default App;
