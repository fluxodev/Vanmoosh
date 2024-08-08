import { TouchableOpacityProps } from "react-native";

import { Container, ButtonTypeStyleProps, Title } from "./style";

type Props = TouchableOpacityProps & {
    type?: ButtonTypeStyleProps;
    title: string;
};

export function ButtonAdd({ title, type = 'primary', ...rest }: Props) {
    return(
        <Container type={type} {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
};