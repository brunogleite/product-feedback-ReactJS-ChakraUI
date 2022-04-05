import { Box, Tag, Flex } from "@chakra-ui/react"

export default function FilterTags(){

    const tags = [
        {"name": "All"},
        {"name": "UI"},
        {"name": "UX"},
        {"name": "Enhancement"},
        {"name": "Bug"},
        {"name": "Feature"}
    ]

    return (
        <Box
        bgColor="white"
        borderRadius="base"
        maxW="255px"
        border="1px solid red"
        py="6"
        pl="6"
        pr="24"
        position="relative"
        >
            <Box>
                <Flex gap="2" w="190px" border="1px solid red" flexWrap="wrap" alignItems="center">
                    {tags.map((tag) => {
                    return <Tag 
                    py="1.5" px="4" 
                    bgColor="greyishWhite20"
                    borderRadius="base"
                    w="max-content"
                    color="secondaryColor"
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{bgColor: "secondaryColor" , color : "white"}}
                    >
                    {tag.name}
                    </Tag>
                    })}
                </Flex>
            </Box>
        
        </Box>
    )
}