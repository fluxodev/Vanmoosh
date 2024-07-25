import { Imagem } from "./style"
import { ImageProps } from "react-native"



type Props = ImageProps & {
    source: any;
    width?: number;
    height?: number;
};

export function UserPhoto({ source, width, height, ...rest }: Props){
    return (
        <Imagem {...rest} source={source} width={width} height={height} />
    )
}