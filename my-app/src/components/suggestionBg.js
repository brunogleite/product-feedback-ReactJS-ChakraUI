import { 
    Box, 
    Heading, 
    Text, 
    Icon, 
    Flex, 
    useDisclosure ,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, 
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

export default function SuggestionBg(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <Box 
        maxW={[null , "255px", "255px", "255px"]} 
        position="relative" 
        borderRadius={[ null, null, null, "base"]} 
        minH={[ "72px", "178px", "178px", "137px" ]}
        background="radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)">
            <Flex alignItems="center" py="2" px="4">
               <Box>
                <Heading  color="white" fontSize="headingSM" as="h2">Frontend Mentor</Heading>
                <Text fontSize="bodyS" color="white" opacity="0.75">Feedback Board</Text>
               </Box> 
               <Box ml="auto" onClick={onOpen}>
                <Icon as={IoMenu} color="white" boxSize="6" /> 
               </Box>  
            </Flex>
        </Box>

            <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            >
            <DrawerOverlay />    

            </Drawer>
        </>
        
    )
}