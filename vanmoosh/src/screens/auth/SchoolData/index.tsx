import { Container, LogoImage, ViewInput, BackgroundImage, Title, styles, MarginButton } from "./styles";
import { Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import background from "@assets/background.png";
import LogoImg from "@assets/white_vanmoosh.png";

import { Input } from "@components/Input";
import { ButtonAdd } from "@components/Button";
import { BackButton } from "@components/BackButton";

export function SchoolData(){
    
  const navigation = useNavigation();

    return (
        <Container>
            
            <BackgroundImage
                source={background}
                defaultSource={background}
                resizeMode="contain"
            >

                <BackButton/>
                <LogoImage
                    source={LogoImg}
                    alt="Logo da empresa Vanmoosh"
                    resizeMode="contain"
                />

                <ViewInput>
                    <Title>Preencha o seguinte formulário com os dados da <Text style={styles.school}>escola</Text>:</Title>
                    
                    <Input placeholder="CEP"/>
                    <Input placeholder="Número"/>
                    <Input placeholder="Complemento
                    
                    
                    "/>
                    <MarginButton>
                        <ButtonAdd
                            title="Registrar"
                        />
                    </MarginButton>
                </ViewInput>
            </BackgroundImage>

       

        </Container>
    );
}