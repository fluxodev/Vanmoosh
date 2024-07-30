import styled from 'styled-components/native';
import { Image, Platform } from 'react-native';


export const HeaderBox = styled.View`
    flex: 1;
    width: 100%;
    height : 150px;
    position: absolute;
    top: 0;
    border-width: 1px;
    border-color: red;
    border-radius: 10px;
`;
export const Header = styled(Image)`
    width: 100%;
    height: ${Platform.OS === 'ios' ? 125 : 120}px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

