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
    width: 400px;
    height: 1px;
    margin-left: -30px;
    margin-top: 5px;
`;
