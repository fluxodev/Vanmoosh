import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from "react-native";
import { Image, ImageBackground, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme}) => theme.COLORS.WHITE}; 
    justify-content: center;
    align-items: center;
`;
export const BackgroundImage = styled(ImageBackground)`
    width: 500px;
    height: 900px;
    justify-content: center;
    align-items: center;
`;  
export const LogoImage = styled(Image)`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
`;

export const ViewInputs = styled(View)`
    background-color: ${({ theme}) => theme.COLORS.WHITE}; 
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    border-top-right-radius: 150px;
    border-top-left-radius: 150px;
    margin-bottom: -250px;
`;

export const MarginBetweenInputs = styled(View)`
    margin-bottom: 30px;
`;

export const MarginBottom = styled(View)`
    margin-bottom: 70px;
`;
export const TextError = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    color: ${({ theme }) => theme.COLORS.BRAND_DARK};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    justify-content: center;
    align-items: center;
    display: inline-block;
    margin-top: 5px;
    margin-bottom: -5px;
`;


export const styles = StyleSheet.create({
    forgot: {
    color: '#00338D', // Cor desejada
    fontSize: 14,
    fontWeight: 'bold',
    },
    notHaveAccount: {
    color: '#000', // Cor desejada
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -10,
    }
});