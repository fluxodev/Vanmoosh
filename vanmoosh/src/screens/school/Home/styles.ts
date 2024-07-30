import { ImageBackground, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;

`;

export const ContainerButton = styled(TouchableOpacity)`
    flex: 1;

    min-width: 65%;

    min-height: 56px;
    max-height: 100px;

    background-color: ${({ theme }) =>  theme.COLORS.WHITE};

    border-radius: 15px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
    align-items: center;
    justify-content: center;

    
`;

export const TitleButton = styled.Text`
    ${({ theme}) => css`
    
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BRAND_LIGHT};
    font-family: ${theme.FONT_FAMILY.BOLD};
    padding: 0 24px;

    `}`;

export const MarginBetweenButtons = styled.View`
    height: 1px;
    width: 75%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-top: 20px;
    margin-bottom: 20px;
`;