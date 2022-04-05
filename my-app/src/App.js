import { Button } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import FilterTags from "./components/filterTags";

function App() {
  return (
    <div>
     <h1>Hello Boa dasda!</h1>
     <Button size="md" variant='primary'>
        Welcome
      </Button>
      <FilterTags />
      <Navbar />
    </div>
  );
}

export default App;
