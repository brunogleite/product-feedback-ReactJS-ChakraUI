import { Box, Flex, Grid, Text, Heading } from "@chakra-ui/react";
import RoadmapComponent from "./RoadmapComponent";


export default function RoadMapGrid(){

    return(
        <Grid templateColumns="repeat(3, 1fr)" gridColumnGap="8">
            <Box w="full">
                <Box mt="12" mb="8">
                    <Heading as="h3" fontWeight="medium" color="darkBlue10" fontSize="headingXS">Planned (2)</Heading>
                    <Text color="greyColor" fontSize="bodyM">Ideas prioritized for research</Text>
                </Box>
                <Box>
                    {/*Componente*/}
                    <RoadmapComponent />
                    {/*Componente*/}
                </Box>
            </Box>
            <Box w="full">
                <Box mt="12" mb="8">
                    <Heading as="h3" fontWeight="medium" color="darkBlue10" fontSize="headingXS">Planned (2)</Heading>
                    <Text color="greyColor" fontSize="bodyM">Ideas prioritized for research</Text>
                </Box>
                <Box>
                <RoadmapComponent />
                </Box>
            </Box>
            <Box w="full">
                <Box mt="12" mb="8">
                    <Heading as="h3" fontWeight="medium" color="darkBlue10" fontSize="headingXS">Planned (2)</Heading>
                    <Text color="greyColor" fontSize="bodyM">Ideas prioritized for research</Text>
                </Box>
                <Box>
                <RoadmapComponent />
                </Box>
            </Box>
        </Grid>
    )
}
