import styled from 'styled-components/native';
import { Image, ImageBackground, Platform } from 'react-native';


export const HeaderBox = styled.View`
    flex: 1;
    width: 100%;
    height : 250px;
    position: absolute;
    top: 0;
    border-radius: 10px;
`;
export const Header = styled(ImageBackground)`
    width: 100%;
    height: 120%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: -10px;

    align-items: center;
    justify-content: center;
`;

export const NameSchool = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;

`;

