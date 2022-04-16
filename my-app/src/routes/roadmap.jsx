import { Box } from "@chakra-ui/react";
import NavRoadmap from "../components/NavRoadmap";
import RoadMapGrid from "../components/RoadMapGrid";

export default function Roadmap(){

    return (
        <Box>
            <NavRoadmap />
            <RoadMapGrid />
            <Box>
                <h1>Yes Sir</h1>
            </Box>
        </Box>
    )
}