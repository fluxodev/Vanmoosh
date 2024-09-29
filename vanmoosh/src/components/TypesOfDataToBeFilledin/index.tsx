import { Container, Title , Line} from "./styles";

type Props = {
    title: string;
}

export function TypesOfDataToBeFilledIn({title}: Props){
    return(
        <Container>
            <Title>{title}</Title>
            <Line/>
            
        </Container>
    )
}