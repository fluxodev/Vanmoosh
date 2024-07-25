import { Image } from "react-native";
import styled from "styled-components/native";

export type ImageTypeStyleProps = {
    width?: number;
    height?: number;
};

type Props = {
    type: ImageTypeStyleProps;
};


export const Imagem = styled(Image)`
    width: ${({width}) => width ? width : 70}px;
    height: ${({height}) => height ? height : 70}px;
    border-radius: 100px;
`;
