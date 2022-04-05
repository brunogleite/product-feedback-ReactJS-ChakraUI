import { Box, Grid } from "@chakra-ui/react"

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
        maxW="300px"
        border="1px solid red"
        py="6"
        pl="6"
        pr="24"
        >
            <Grid 
            gridTemplateColumns="repeat(3, 1fr)" 
            gridTemplateRows="repeat(3,1fr)" 
            columnGap="2" 
            rowGap="3.5" 
            
            >
                {tags.map((tag) => {
                 return <Box 
                 py="1.5" px="4" 
                 bgColor="greyishWhite20"
                 borderRadius="base"
                 w="max-content">{tag.name}
                  </Box>
                })}
            </Grid>
        </Box>
    )
}