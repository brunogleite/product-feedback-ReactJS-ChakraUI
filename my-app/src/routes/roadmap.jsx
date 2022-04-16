import { Box } from "@chakra-ui/react";
import NavRoadmap from "../components/NavRoadmap";
import RoadMapGrid from "../components/RoadMapGrid";

export default function Roadmap(){

    return (
        <Box bgColor="greyishWhite10" minH="100vh">
            <Box maxW="1110px" margin="0 auto" py="20">
                <NavRoadmap />
                <RoadMapGrid />
            </Box>
        </Box>
    )
}