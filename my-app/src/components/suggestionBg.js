import { Box, Heading, Text } from "@chakra-ui/react"

export default function SuggestionBg(){

    return(
        <Box 
        maxW="255px" 
        position="relative" 
        borderRadius="base" 
        pl="6" 
        pb="6" 
        minH={[ "178px", "178px", "178px", "137px" ]}
        background="radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)">
            <Box>
                <Heading  color="white" fontSize="headingSM" as="h2" mb="2">Frontend Mentor</Heading>
                <Text fontSize="bodyS" color="white" opacity="0.75">Feedback Board</Text>
            </Box>
        </Box>
    )
}