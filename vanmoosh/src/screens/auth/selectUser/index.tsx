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
  
  import { registerUser } from "@libs/firebase/auth";
  
  
  import LogoImg from "@assets/white_vanmoosh.png";
import background from "@assets/background.png";
  
  import { User, defaultUser } from "@utils/users";
  
  import { useState } from "react";
  
  import { SchoolNavigatorRoutesProps } from "@routes/Routes_School/app.routes";
  
  export function SelectUser() {
  
    const navigation = useNavigation<SchoolNavigatorRoutesProps>();
  
    function HandleCommom(){
        console.log('Comum');
        
    }
    function HandleSchool(){
        console.log('Escolar');
        
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
  