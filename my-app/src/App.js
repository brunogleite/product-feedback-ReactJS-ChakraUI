import { Button } from "@chakra-ui/react";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
     <h1>Hello Boa dasda!</h1>
     <Button size="md" variant='primary'>
        Welcome
      </Button>
      <Navbar />
    </div>
  );
}

export default App;
