import { Container, Name, RegisterAcademic, Icon } from "./style";
import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
    name: string;
    // registerAcademic: number;
    onRemove: () => void;
}

export function StudentCard({ name, onRemove  }: Props) {
    return (
        <Container>

        <Icon name="person" />

            <Name>
                {name}
            </Name>

            <ButtonIcon
                icon="close"
                type="secondary"
                onPress={onRemove}
            />

            {/* <RegisterAcademic>
                {registerAcademic}
            </RegisterAcademic> */}

        </Container>
    );
}