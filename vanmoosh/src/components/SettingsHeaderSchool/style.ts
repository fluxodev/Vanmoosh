import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";


export const Container = styled.SafeAreaView`
    width: 100%;
    height: 25%;

    flex-direction: row; 
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
    border-color: red;
    border-width: 1px;
    `;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
    `;

export const BackButton = styled.TouchableOpacity`
    margin-left: 250px;
`;