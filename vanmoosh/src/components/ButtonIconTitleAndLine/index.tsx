import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconTypeStyleProps, TitleButton, Line } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  type?: ButtonIconTypeStyleProps
}

export function ButtonIconTitleAndLine({ icon, type = 'primary', title, ...rest }: Props) {
  return(
    <Container {...rest}>
      <Icon 
        name={icon}
        type={type} 
      />
      <TitleButton>
        {title}
      </TitleButton>

      <Line/>
    </Container>
  );
}