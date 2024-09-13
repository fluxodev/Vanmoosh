import { ImageBackground, Image } from "react-native";
import styled, {css} from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.BRAND_LIGHT};
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

export const ViewInput = styled.View`
    background-color: ${({theme}) => theme.COLORS.WHITE};

    height: 600px;
    width: 420px;
    margin-top: 10%;
    border-radius: 40%;

    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`

        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.BRAND_MID};`}

        text-align: center;
        margin: 7% 5% 5%;
    `;

export const MarginButton = styled.View`
    margin-top: 30%;
    width: auto;
`;

export const styles = StyleSheet.create({
    school: {
        color: '#4F95FF'
    },
    
});