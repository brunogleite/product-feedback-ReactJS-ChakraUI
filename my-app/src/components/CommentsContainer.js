import { Box, Heading, Image } from "@chakra-ui/react";

export default function CommentsContainer({productReq}){

    const {id, title, category, active, description, upvotes, status, comments} = productReq;

    console.log(comments[0].user.image)

    return(
        <Box bgColor="white" borderRadius="sm">
            <Box pt="6" px="8" pb="12">
                <Heading as="h3" fontSize="headingXS">4 Comments</Heading>
                <Box>
                    <Box>
                        <Image boxSize="50" src={`${comments[0].user.image}`}></Image>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
}