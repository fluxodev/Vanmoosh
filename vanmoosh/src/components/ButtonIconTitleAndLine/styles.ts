import styled, {css} from 'styled-components/native';
import { TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'primary' | 'secondary';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 95%;
  height: 70px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  margin-top: 3%;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 35,
  color: type === 'primary' ? theme.COLORS.BRAND_MID : theme.COLORS.BRAND_MID

}))`
  margin-left: 20px;
  margin-top: -10px;
`;

export const TitleButton = styled.Text`
margin-top: -27px;
margin-left: 50px;
    ${({ theme}) => css`
    
    font-size: ${Platform.OS === 'android' ? theme.FONT_SIZE.P  : theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BRAND_MID};
    font-family: ${theme.FONT_FAMILY.BOLD};
    padding: 0 24px;
    

`}`;

export const Line = styled.View`
  ${({ theme}) => css`
    background-color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 15px;
  margin-left: -40px;

  width: 97%;
  height: 1px;
 
`;
