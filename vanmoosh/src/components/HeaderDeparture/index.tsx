import {Container, Title, BackButton} from './styles'
import {  CaretLeft  } from 'phosphor-react-native'
import theme from '@theme/index'
import { useNavigation } from '@react-navigation/native'

type Props = {
    title: string
}

export default function HeaderDeparture({title}: Props) {

    const {goBack} = useNavigation()

    const { COLORS } = theme

  return (
    <Container >

      <BackButton onPress={goBack} >
            <CaretLeft size={30} color={COLORS.GRAY_800} />
      </BackButton>

      <Title>
        {title}
      </Title>

    </Container>
  )
}