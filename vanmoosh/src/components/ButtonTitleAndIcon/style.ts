import styled, {css} from 'styled-components/native';
import { TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'primary' | 'secondary';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 110px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_GRAY};
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'primary' ? theme.COLORS.BRAND_MID : theme.COLORS.BRAND_ULTRALIGHT
}))``;

export const TitleButton = styled.Text`
    ${({ theme}) => css`
    
    font-size: ${Platform.OS === 'android' ? theme.FONT_SIZE.P  : theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.BRAND_LIGHT};
    font-family: ${theme.FONT_FAMILY.BOLD};
    padding: 0 24px;
    

    `}`;
