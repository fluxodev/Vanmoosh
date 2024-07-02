import { Header } from "@components/Header";
import { Container, Content, Icon} from "./style";
import { Highlight } from "@components/Highlight";
import { ButtonAdd } from "@components/Button";
import { Input } from "@components/Input";

export default function NewGroup() {
    return (
        <Container>
            <Header showBackButton/>
            
            <Content>
                <Icon />
                <Highlight
                title="Crie uma turma"
                subTitle="Crie uma nova turma para adicionar alunos."
                />
                
                <Input placeholder="Adicione uma nova classe"/>

                <ButtonAdd 
                style={{marginTop: 24}}
                title="Criar"/>

            </Content>

            
        </Container>
    );
}