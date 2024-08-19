import { TextInput } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled(TextInput)`

${({ theme }) => css`
    flex: 1;

    min-width: 85%;
    
    min-height: 56px;
    max-height: 56px;

    background-color: ${theme.COLORS.BRAND_ULTRALIGHT};


    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border-radius: 6px;
    border-color: ${theme.COLORS.BRAND_LIGHT};
    border-width: 1;

    margin-top: 4%;

    padding: 16px;
`}
`;