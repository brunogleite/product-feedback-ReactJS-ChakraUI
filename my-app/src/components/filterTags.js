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
        py="6"
        pl="6"
        pr="12"
        bgColor="white"
        borderRadius="base"
        >
            <Grid 
            gridTemplateColumns="repeat(3, 1fr)" 
            gridTemplateRows="repeat(auto-fill,1fr)" 
            columnGap="2" 
            rowGap="3.5" 
            >
                {tags.map((tag) => {
                 return <Box 
                 py="1.5" px="4" 
                 bgColor="greyishWhite20"
                 borderRadius="base">{tag.name}
                  </Box>
                })}
            </Grid>
        </Box>
    )
}