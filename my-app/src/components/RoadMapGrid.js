import { Box, Flex, Grid, Text, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import DataContext from "../context/data/dataContext";
import RoadmapComponent from "./RoadmapComponent";


export default function RoadMapGrid(){
    const dataContext = useContext(DataContext);
    const {requests} = dataContext

    //make three variables to store and filter for each category : planned, in-progress, live
    const plannedItems = requests.filter(item => item.status === "planned"); 

    const inProgressItems =  requests.filter(item => item.status === "in-progress");

    const liveItems = requests.filter(item => item.status === "live"); 


    return(
        <Grid templateColumns="repeat(3, 1fr)" gridColumnGap="8">
            <Box w="full">
                <Box mt="12" mb="8">
                    <Heading as="h3" fontWeight="medium" color="darkBlue10" fontSize="headingXS">Planned ({plannedItems.length})</Heading>
                    <Text color="greyColor" fontSize="bodyM">Ideas prioritized for research</Text>
                </Box>
                <Box>
                    {plannedItems?.map((item) => {
                        return <RoadmapComponent id={item.id} product={item} />
                    })}
                </Box>
            </Box>
            <Box w="full">
                <Box mt="12" mb="8">
                    <Heading as="h3" fontWeight="medium" color="darkBlue10" fontSize="headingXS">In-Progress ({inProgressItems.length})</Heading>
                    <Text color="greyColor" fontSize="bodyM">Ideas prioritized for research</Text>
                </Box>
                <Box>
                    {inProgressItems?.map((item) => {
                        return <RoadmapComponent id={item.id} product={item} />
                    })}
                </Box>
            </Box>
            <Box w="full">
                <Box mt="12" mb="8">
                    <Heading as="h3" fontWeight="medium" color="darkBlue10" fontSize="headingXS">Live ({liveItems.length})</Heading>
                    <Text color="greyColor" fontSize="bodyM">Ideas prioritized for research</Text>
                </Box>
                <Box>
                    {liveItems?.map((item) => {
                        return <RoadmapComponent id={item.id} product={item} />
                    })}
                </Box>
            </Box>
        </Grid>
    )
}
