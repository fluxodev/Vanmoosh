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

  margin-left: 25%;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color: type === 'primary' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_300
}))``;


