import styled, {css} from 'styled-components/native';
import { TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'primary' | 'secondary';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 80px;
  margin-left: 20px;
  border-radius: 20px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 45,
  color: type === 'primary' ? theme.COLORS.BRAND_MID : theme.COLORS.GRAY_100
}))``;

export const TitleButton = styled.Text`
margin-top: -30px;
margin-left: 30px;
    ${({ theme}) => css`
    
    font-size: ${Platform.OS === 'android' ? theme.FONT_SIZE.P  : theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BRAND_LIGHT};
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
