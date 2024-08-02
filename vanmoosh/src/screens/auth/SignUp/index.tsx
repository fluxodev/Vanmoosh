import {
  Container,
  BackgroundImage,
  LogoImage,
  ViewInputs,
  MarginBetweenInputs,
  MarginBetweenTexts,
  MarginBottom,
  styles,
  TextError,
} from "./styles";

import { Pressable, Text } from "react-native";
import React from "react";

import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ButtonAdd } from "@components/Button";

import { useNavigation } from "@react-navigation/native";

import { registerUser } from "@libs/firebase/auth";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import LogoImg from "@assets/white_vanmoosh.png";
import background from "@assets/background.png";

import { User, defaultUser } from "@utils/users";

import { useState } from "react";

import { SchoolNavigatorRoutesProps } from "@routes/Routes_School/app.routes";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatório").min(6, "Mínimo de 6 caracteres"),
});

export function SignUp() {

  const [user, setUser] = useState<User>(defaultUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  //control serve para controlar o formulário

  const navigation = useNavigation<SchoolNavigatorRoutesProps>();

  async function handleSignUp(data: FormDataProps) {
    try {
      const { name, email, password } = data;

    const newUser: User = {
      ...defaultUser,
      name,
      email,
      password,
      
    };

    const registerUserResponse = await registerUser(newUser, password);

    setUser(newUser);
    //navigation.navigate('Home_School');

    } catch (error) {
      console.log(error);
    }
    
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
          <Highlight title="Cadastrar" subTitle="Crie sua conta. " />

          <Controller
            control={control}
            name="name"
            render={(
              { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
            ) => (
              <Input
                placeholder="Nome Completo"
                returnKeyType="done"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {errors.name && <TextError>{errors.name.message}</TextError>}

          <MarginBetweenInputs />
          <Controller
            control={control}
            name="email"
            render={(
              { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
            ) => (
              <Input
                placeholder="E-mail"
                returnKeyType="done"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {errors.email && <TextError>{errors.email.message}</TextError>}

          <MarginBetweenInputs />
          <Controller
            control={control}
            name="password"
            render={(
              { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
            ) => (
              <Input
                placeholder="Senha"
                returnKeyType="send"
                secureTextEntry={true}
                onChangeText={onChange}
                value={value}

              />
            )}
          />

          {errors.password && <TextError>{errors.password.message}</TextError>}

          <MarginBetweenInputs />
          <ButtonAdd title="Entrar" onPress={handleSubmit(handleSignUp)} />

          <Pressable onPress={() => navigation.goBack()}>
            <MarginBetweenTexts />

            <Text style={styles.forgot}>Esqueci minha senha</Text>
          </Pressable>

          <MarginBetweenTexts />
          <Text style={styles.notHaveAccount}>Ainda não possui uma conta?</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.forgot}>Registre-se</Text>
          </Pressable>
          <MarginBottom />
        </ViewInputs>
      </BackgroundImage>
    </Container>
  );
}
