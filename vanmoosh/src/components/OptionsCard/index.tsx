import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
}

export function OptionsCard({title, ...rest}: Props){
    return (
        <Container {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}