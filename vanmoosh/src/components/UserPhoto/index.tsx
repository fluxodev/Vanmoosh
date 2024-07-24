import { Imagem } from "./style"
import { ImageProps } from "react-native"

type Props = ImageProps & {
    source: string;
};

export function UserPhoto({ source, ...rest }: Props){
    return (
        <Imagem {...rest} source={source} />
    )
}