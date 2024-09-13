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

    margin-top: 10%;
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

        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.BRAND_MID};`}

        margin-top: 5%;
    `;

export const MarginButton = styled.View`
    margin-top: 40%;
    width: auto;
`;

export const MarginPressable = styled.View`
    margin-top: 4%;
    align-items: center;
`;


export const styles = StyleSheet.create({
    forgot: {
    color: '#00338D', 
    fontSize: 14,
    fontWeight: 'bold',
    },
    notHaveAccount: {
    color: '#000', 
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -10,
    }
});