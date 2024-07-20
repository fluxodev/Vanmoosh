import { TextInput } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled(TextInput)`

${({ theme }) => css`
    flex: 1;

    min-width: 65%;
    
    min-height: 56px;
    max-height: 56px;

    background-color: ${theme.COLORS.GRAY_100};
    color: ${theme.COLORS.GRAY_800};


    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border-radius: 6px;
    padding: 16px;
`}
`;