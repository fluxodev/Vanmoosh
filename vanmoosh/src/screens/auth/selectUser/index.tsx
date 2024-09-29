import {
    Container,
    BackgroundImage,
    LogoImage,
    ViewInputs,
    MarginBottom,
    MarginBetweenInputs,
} from "./styles";
  
  import React from "react";
  import { Highlight } from "@components/Highlight";
  import { ButtonAdd } from "@components/Button";
  import { useNavigation } from "@react-navigation/native";
  import { AuthNavigatorRoutesProps } from "@routes/Auth/app.routes";
  import LogoImg from "@assets/white_vanmoosh.png";
  import background from "@assets/background.png";

  
  export function SelectUser() {
  
    const navigation = useNavigation<AuthNavigatorRoutesProps>();
  
    function HandleCommom(){
        navigation.navigate('CommomUserRegister')
        
    }
    function HandleSchool(){
      navigation.navigate('SchoolRegister')
        
    }
  
    return (
      <Container>
        {/* <StatusBar barStyle='light-content' /> */}
  
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
  
          <ViewInputs>
            <Highlight title="Usuário" subTitle="Com qual usuário você deseja se registrar? " />

            
            <ButtonAdd title="Responsável" onPress={HandleCommom} />
            <MarginBetweenInputs />
            <ButtonAdd title="Escola" onPress={HandleSchool} />
            <MarginBottom />
  
          </ViewInputs>
        </BackgroundImage>
      </Container>
    );
  }
  