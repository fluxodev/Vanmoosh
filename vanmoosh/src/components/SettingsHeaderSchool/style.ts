import styled, { css} from "styled-components/native";
import { Platform, StatusBar } from "react-native";



export const Container = styled.SafeAreaView`
    width: 90%;
    height: 25%;
    

    
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
    `;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;

    `;

export const BackButton = styled.TouchableOpacity`
    left: 50px;
`;


export const Title = styled.Text`
    ${({ theme }) => css`
    text-align: center;
    
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BRAND_MID};`}
    `;

export const DivFlexRow = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    `;