import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ImageBackground, View } from 'react-native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme}) => theme.COLORS.WHITE}; 
    justify-content: center;
    align-items: center;
`;

export const Header = styled(SafeAreaView)`
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 95px;
`;

export const Footer = styled(SafeAreaView)`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 100px;
    align-items: center;
`;

export const BackgroundImage = styled(ImageBackground)`
    width: 500px;
    height: 900px;
    justify-content: center;
    align-items: center;
`;  

export const MarginBetweenButtons = styled(View)`
    margin-bottom: 30px;

`;

export const LogoImage = styled(Image)`
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-top: -60px;
`;

export const Text1 = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-block;
    margin-left: 30px;
`;
export const Text2 = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-block;
    margin-left: 30px;
`;
export const Text3 = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    color: ${({ theme }) => theme.COLORS.BRAND_MID};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-block;
    margin-left: 30px;

`;

export const MarginBetweenParagraphs = styled(View)`
    margin-top: 160px;

`;