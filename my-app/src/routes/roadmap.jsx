import { Box } from "@chakra-ui/react";
import NavRoadmap from "../components/NavRoadmap";
import RoadMapGrid from "../components/RoadMapGrid";

import { useContext, useEffect } from "react";

import DataContext from "../context/data/dataContext";

export default function Roadmap(){
    const dataContext = useContext(DataContext);
    const { requests, getData } = dataContext;

    //get Data in initial render
    useEffect(() => {
        getData();
    }, [])
    
    console.log(requests)


    return (
        <Box bgColor="greyishWhite10" minH="100vh">
            <Box maxW="1110px" margin="0 auto" py="20">
                <NavRoadmap />
                <RoadMapGrid />
            </Box>
        </Box>
    )
}