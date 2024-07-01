import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
    color: ${theme.COLORS.GRAY_300};
`}
`;