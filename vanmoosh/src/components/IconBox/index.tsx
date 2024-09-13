import theme from "@theme/index";
import { Container, propsSize } from "./style";
import { IconProps } from "phosphor-react-native";

export type BoxIconProps = (props: IconProps) => JSX.Element;

type Props = {
    size?: propsSize;
    icon: BoxIconProps;
}

export function IconBox({size = 'NORMAL', icon: Icon}: Props){

    const iS = size === 'NORMAL' ? 26 : 18;

    return (
        <Container size={size} >
            <Icon
            size={iS}
            color={theme.COLORS.GRAY_100}
            />
        </Container>
    )
}