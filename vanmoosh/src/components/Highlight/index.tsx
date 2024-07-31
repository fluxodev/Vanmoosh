import { Container, Title, SubTitle } from "./style";

type Props = {
    title: string;
    subTitle?: string;
}

export function Highlight({ title, subTitle }: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <SubTitle> 
                {subTitle} 
            </SubTitle>
        </Container>
    );
}