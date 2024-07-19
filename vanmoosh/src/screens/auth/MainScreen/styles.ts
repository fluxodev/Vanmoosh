import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme}) => theme.COLORS.WHITE}; 
    justify-content: center;
    align-items: center;
`;
export const MarginBetweenButtons = styled(SafeAreaView)`
    height: 50px;

`;

export const LogoImage = styled(Image)`
    width: 150px;
    height: 150px;
    margin-bottom: 150px;
`;