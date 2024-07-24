import styled, { css } from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.TouchableOpacity`

    width: 90%;
    height: 11%;
    border-radius: 25px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.COLORS.BRAND_ULTRALIGHT};
`;

export const Title = styled.Text`
    ${({ theme}) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_800};
    `}`;