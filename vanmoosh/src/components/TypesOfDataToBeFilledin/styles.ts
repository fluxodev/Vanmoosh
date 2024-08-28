import styled, {css} from "styled-components/native";

export const Container = styled.View`
    
    margin-top: 10%;
`;

export const Title = styled.Text`
     ${({ theme }) => css`
    text-align: left;

    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BRAND_MID};
    `}  
`;

export const Line = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
    width: 400;
    height: 1;
    margin-left: -30;
    margin-top: 5;
`;
