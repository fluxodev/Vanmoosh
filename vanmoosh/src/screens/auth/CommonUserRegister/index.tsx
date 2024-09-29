import {
    Container,
    BackgroundImage,
    LogoImage,
    ViewInputs,
    MarginBetweenInputs,
    MarginBottom,
    TextError,
  } from "./style";

  import React from "react";
  
  import { Highlight } from "@components/Highlight";
  import { Input } from "@components/Input";
  import { ButtonAdd } from "@components/Button";
  
  import { useNavigation } from "@react-navigation/native";

  import { useForm, Controller } from "react-hook-form";
  import * as yup from "yup";
  import { yupResolver } from "@hookform/resolvers/yup";
  
  import LogoImg from "@assets/vanmooshDeitada.png";
  import background from "@assets/background.png";
  
  import { User, defaultUser } from "@utils/users";
  
  import { useState } from "react";
  
  import { SchoolNavigatorRoutesProps } from "@routes/Routes_School/app.routes";

  import { registerCommomUser } from "@libs/firebase/db/registerCommonUser";
  
  type FormDataProps = {
    cpf: string;
    telefone: string;
    birthdayDate: string;
    cep: string;
    address: string;
  };
  
  const signUpSchema = yup.object({
    cpf: yup.string().required("CPF é obrigatório"),
    telefone: yup.string().required("Telefone é obrigatório").min(11, "Insira um telefone válido"),
    birthdayDate: yup.string().required("Data de nascimento é obrigatório").min(6, "Mínimo de 6 caracteres"),
    cep: yup.string().required("CEP é obrigatório").min(8, "Insira um CEP válido"),
    address: yup.string().required("Endereço é obrigatório"),
  });
  
  export function CommomUserRegister() {
  
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
  
    async function handleRegister(data: FormDataProps) {
      const { address, birthdayDate, cep, cpf, telefone  } = data;
      
      const newUserData = {
        cpf: cpf,
        telefone: telefone,
        birthdayDate: birthdayDate,
        cep: cep,
        address: address,
      };

      await registerCommomUser(newUserData);

       navigation.goBack()

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
              name="cpf"
              render={(
                { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
              ) => (
                <Input
                  placeholder="CPF"
                  returnKeyType="done"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
  
            {errors.cpf && <TextError>{errors.cpf.message}</TextError>}

            <MarginBetweenInputs />
            <Controller
              control={control}
              name="telefone"
              render={(
                { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
              ) => (
                <Input
                  placeholder="Número de Telefone"
                  returnKeyType="done"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
  
            {errors.telefone && <TextError>{errors.telefone.message}</TextError>}
  
  
            
            <MarginBetweenInputs />
            <Controller
              control={control}
              name="birthdayDate"
              render={(
                { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
              ) => (
                <Input
                  placeholder="Data de Nascimento"
                  onChangeText={onChange}
                  value={value}
  
                />
              )}
            />
  
            {errors.birthdayDate && <TextError>{errors.birthdayDate.message}</TextError>}
  
            <MarginBetweenInputs />
            <Controller
              control={control}
              name="cep"
              render={(
                { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
              ) => (
                <Input
                  placeholder="CEP"
                  returnKeyType="send"
                  onChangeText={onChange}
                  value={value}
  
                />
              )}
            />
  
            {errors.cep && <TextError>{errors.cep.message}</TextError>}
            
            <MarginBetweenInputs />
            <Controller
              control={control}
              name="address"
              render={(
                { field: { onChange, value } } //field é um objeto que contem o onChange, que serve para alterar o valor do input que vem de um componente controlado pelo react-hook-form
              ) => (
                <Input
                  placeholder="Endereço"
                  returnKeyType="done"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
  
            {errors.telefone && <TextError>{errors.telefone.message}</TextError>}
  
            <MarginBetweenInputs />
            <ButtonAdd title="Cadastrar" onPress={handleSubmit(handleRegister)} />

            <MarginBottom />
  
           
          </ViewInputs>
        </BackgroundImage>
      </Container>
    );
  }
  