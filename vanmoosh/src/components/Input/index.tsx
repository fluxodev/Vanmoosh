import { TextInputProps,TextInput } from "react-native";
import { Container } from "./style";
import { useTheme } from "styled-components";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
}

export function Input({inputRef, ...rest}: Props) {
    const { COLORS } = useTheme();


    return(
        <Container 
        ref={inputRef}
        {...rest}
        />
    )
}