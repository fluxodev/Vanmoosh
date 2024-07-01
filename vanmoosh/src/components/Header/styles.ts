import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";


export const Container = styled.SafeAreaView`
    width: 100%;

    flex-direction: row; 
    align-items: center;
    justify-content: center;
    `;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
    `;

export const BackButton = styled.TouchableOpacity`
    margin-right: 250px;
`;