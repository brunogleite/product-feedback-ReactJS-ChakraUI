import { Box, Button, Heading, Text, Textarea, Select, Flex, useToast  } from "@chakra-ui/react"

export default function EditFeedback(){
    return (
        <Box minH="100vh" display="grid" placeContent="center" bgColor="greyishWhite10">
            <Box bgColor="white" borderRadius="base" maxW="540px" marginInline="auto">
            <Box px="10" pt="14" pb="10">
                <Heading as="h1" fontSize="headingL">Editing "Add a dark theme option"</Heading>
                <Box pb="8" pt="16">
                    <Box>
                        <Text fontSize="bodyXXS" color="darkBlue10" fontWeight="bold">Feedback Title</Text>
                        <Text fontSize="bodyXXS" color="greyColor" pt="0.5" pb="4" >Add a short, descriptive headline</Text>
                        <Textarea
                        borderRadius="sm"  
                        bgColor="greyishWhite10" 
                        border="none" 
                        p="4" 
                        _active={{border: "1px solid secondaryColor"}}
                        mr="4" />
                    </Box>
                    <Box pt="6">
                        <Text fontSize="bodyXXS" color="darkBlue10" fontWeight="bold">Category</Text>
                        <Text fontSize="bodyXXS" color="greyColor" pt="0.5" pb="4">Choose a category for your feedback</Text>
                        <Select>
                            <option value='ui'>UI</option>
                            <option value='ux'>UX</option>
                            <option value='enhancement'>Enhancement</option>
                            <option value='bug'>Bug</option>
                            <option value='feature'>Feature</option>
                        </Select>
                    </Box>
                    <Box py="6">
                        <Text fontSize="bodyXXS" color="darkBlue10" fontWeight="bold">Update Status</Text>
                        <Text fontSize="bodyXXS" color="greyColor" pt="0.5" pb="4">Change feedback state</Text>
                        <Select>
                            <option value='planned'>Planned</option>
                            <option value='in-progress'>In-Progress</option>
                            <option value='live'>Live</option>
                        </Select>
                    </Box>
                    <Box>
                        <Text fontSize="bodyXXS" color="darkBlue10" fontWeight="bold">Feedback Detail</Text>
                        <Text fontSize="bodyXXS" color="greyColor" pt="0.5" pb="4">Include any specific comments on what should be improved, added, etc.</Text>
                        <Textarea
                        borderRadius="sm"  
                        bgColor="greyishWhite10" 
                        border="none" 
                        p="4" 
                        _active={{border: "1px solid secondaryColor"}}
                        mr="4" />
                    </Box>
                </Box>
                <Flex alignItems="center">
                    <Box>
                        <Button variant="delete" size="md">Delete</Button>
                    </Box>
                    <Box ml="auto">
                        <Button variant="dark" size="md" mr="4">Cancel</Button>
                        <Button variant="primary" size="md">Add Feedback</Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
        </Box>
        
    )
}