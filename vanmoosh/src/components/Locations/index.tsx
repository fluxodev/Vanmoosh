
import { Van, FlagCheckered } from 'phosphor-react-native'

import { InfoLocation, InfoLocationProps } from '@components/LocationInfo';

import { Container, Line } from './styles';

type Props = {
  departure: InfoLocationProps,
  arrival: InfoLocationProps
}

export function Locations({ arrival, departure }: Props) {
  return (
    <Container>
      <InfoLocation 
        icon={Van}
        label={departure.label}
        description={departure.description}
      />

      <Line />

      <InfoLocation 
        icon={FlagCheckered}
        label={arrival.label}
        description={arrival.description}
      />
    </Container>
  );
}