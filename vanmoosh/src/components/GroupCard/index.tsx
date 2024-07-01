import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./style";

type Props = TouchableOpacityProps & { //estou usando o TouchableOpacityProps para poder passar as propriedades do touchable
    title: string;
};


export function GroupCard({title, ...rest}: Props) {
    return (
        <Container {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    );
}