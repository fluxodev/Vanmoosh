import styled, {css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    margin: 32px 0;
    padding: 22px;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.WHITE_GRAY};

    flex-direction: row;
    align-items: center;

`;

export const IconBox = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;
    margin-right: 16px;
`;

export const Highlight = styled.Text`
    ${({ theme }) => css`
    color: ${theme.COLORS.BRAND_MID};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const TextBox = styled.Text`
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    flex: 1;
    text-align: justify;
    textAlignVertical: center;
    `}
`;
