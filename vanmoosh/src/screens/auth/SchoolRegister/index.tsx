import { Container, LogoImage, ViewInput, BackgroundImage, Title, styles, MarginButton, MarginPressable } from "./styles";
import { Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import background from "@assets/background.png";
import LogoImg from "@assets/white_vanmoosh.png";

import { Input } from "@components/Input";
import { ButtonAdd } from "@components/Button";

export function SchoolRegister(){
    
  const navigation = useNavigation();

    return (
        <Container>
            
            <BackgroundImage
                source={background}
                defaultSource={background}
                resizeMode="contain"
            >
                <LogoImage
                    source={LogoImg}
                    alt="Logo da empresa Vanmoosh"
                    resizeMode="contain"
                />

                <ViewInput>
                    <Title>Cadastrar</Title>
                    
                    <Input placeholder="Nome da instituição"/>
                    <Input placeholder="E-mail"/>
                    <Input placeholder="Crie uma senha"/>
                    <MarginButton>
                        <ButtonAdd
                            title="Cadastrar"
                        />
                    </MarginButton>

                    <MarginPressable>
                        <Text style={styles.notHaveAccount}>Já possui uma conta?</Text>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Text style={styles.forgot}>Entre</Text>
                        </Pressable>
                    </MarginPressable>
                </ViewInput>
            </BackgroundImage>

       

        </Container>
    );
}