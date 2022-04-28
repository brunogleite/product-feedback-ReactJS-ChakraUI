import { Box, Tag, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import DataContext from "../context/data/dataContext";

export default function FilterTags({onClose}){
    const dataContext = useContext(DataContext);
    const {updateActiveTag, activeTag } = dataContext

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
        py="6"
        pl="6"
        pr="24"
        position="relative"
        minH={[ "178px", "178px", "178px", "137px" ]}
        >
            <Box>
                <Flex gap="2" w="190px" flexWrap="wrap" alignItems="center">
                    {tags.map((tag) => {
                    return <Tag 
                    py="1.5" px="4" 
                    bgColor="greyishWhite20"
                    borderRadius="base"
                    w="max-content"
                    color="secondaryColor"
                    cursor="pointer"
                    onClose={onClose}
                    transition="all 0.3s ease-in-out"
                    _hover={{bgColor: "secondaryColor" , color : "white"}}
                    onClick={() => updateActiveTag(tag.name)}
                    >
                    {tag.name}
                    </Tag>
                    })}
                </Flex>
            </Box>
        
        </Box>
    )
}