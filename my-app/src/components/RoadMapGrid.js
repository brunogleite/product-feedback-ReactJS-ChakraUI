import { Box, Grid, Text } from "@chakra-ui/react";


export default function RoadMapGrid(){

    return(
        <Grid templateColumns="repeat(3, 1fr)">
            <Box w="full">
                <Box>
                    <Text>Planned (2)</Text>
                    <Text>Ideas prioritized for research</Text>
                </Box>
                <Box>
                    
                </Box>
            </Box>
            <Box w="full">
            <Box>
                    <Text>Planned (2)</Text>
                    <Text>Ideas prioritized for research</Text>
                </Box>
                <Box>
                    
                </Box>
            </Box>
            <Box w="full">
            <Box>
                    <Text>Planned (2)</Text>
                    <Text>Ideas prioritized for research</Text>
                </Box>
                <Box>
                    
                </Box>
            </Box>
        </Grid>
    )
}
