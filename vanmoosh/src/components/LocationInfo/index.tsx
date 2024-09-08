import { Container, Description, Info, Label } from "./styles";
import { BoxIconProps, IconBox } from "@components/IconBox";

export type InfoLocationProps = {
    label: string;
    description: string;
}

type Props = InfoLocationProps & {
    icon: BoxIconProps;
};

export function InfoLocation({label,  icon, description}: Props){
    return(
        <Container>
            
            <Info>

                <Label numberOfLines={1}>
                    {label}
                </Label>

                <Description numberOfLines={1}>
                    {description}
                </Description>

            </Info>

            <IconBox
            icon={icon}
            />

        </Container>
    )
}