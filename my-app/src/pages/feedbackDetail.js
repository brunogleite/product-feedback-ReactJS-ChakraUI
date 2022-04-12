import { Box, Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useData } from "../context/useData";

export default function FeedbackDetail({product}){

    let params = useParams();



    return(
        <Container>
            <h1>Hello EveryOne: {params.feedbackId}</h1>
        </Container>
    )
}