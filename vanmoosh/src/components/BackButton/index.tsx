import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconTypeStyleProps  } from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps
}

export function BackButton({ type = 'primary', }: Props) {
  return(
    <Container>
      <Icon 
        name='arrow-back-ios'
        type={type} 
      />
    </Container>
  );
}