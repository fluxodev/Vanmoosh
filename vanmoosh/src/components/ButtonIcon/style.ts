import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import theme from '@theme/index';

export type ButtonIconTypeStyleProps = 'primary' | 'secondary';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.COLORS.BRAND_MID};
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'primary' ? theme.COLORS.BRAND_MID : theme.COLORS.BRAND_DARK
}))``;