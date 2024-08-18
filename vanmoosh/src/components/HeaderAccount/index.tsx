import { UserPhoto } from "@components/UserPhoto";
import { Container, Icon, Title } from "./style";


import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    title: string;
  }

export function HeaderAccount({title} : Props){
    return(
        <Container>
            <Title>{title}</Title>
            <Icon
                name="people"
            />
        </Container>
        
    );
}