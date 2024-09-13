import { TouchableOpacityProps } from 'react-native';
import { Container, Info, Plate } from './styles';
import { Check, ClockClockwise, Van, Flag } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

export type HistoricCardProps = {
    id: string,
    placaVeicular: string | null,
    isSync: boolean;
 }

type Props = TouchableOpacityProps & {
    data: HistoricCardProps,
}

export function HistoricCard({ data, ...rest }: Props) {
    const { COLORS } = useTheme();
  
    return (
      <Container {...rest}>
        <Info>
        <Plate>
          {data.placaVeicular}
        </Plate>
      </Info>

      {
        data.isSync ?
          <Check 
            size={24}
            color={COLORS.BRAND_LIGHT}
          /> 
          :
          <ClockClockwise 
            size={24}
            color={COLORS.GRAY_400}
          />
      }
        </Container>
        
    );
  }