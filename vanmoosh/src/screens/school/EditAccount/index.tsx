import { Header, Container, Footer, BackButton, EditProfile, Title, InputText, DivInput, TitleInput, Space } from "./styles";
import {  CaretLeft  } from 'phosphor-react-native'
import { UserPhoto } from "@components/UserPhoto";
import { useNavigation } from '@react-navigation/native';
import theme from "@theme/index";
import LogoImg from '@assets/logo.png'
import { SchoolNavigatorRoutesProps } from "@routes/Routes_School/app.routes";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";


export default function EditAccount() {
    const [photoLoading, setPhotoLoading] = useState(false);
    const [userPhoto, setUserPhoto ] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
    const navigation = useNavigation<SchoolNavigatorRoutesProps>();

    function handleGoBack(){
        navigation.navigate('Account_School');
    }

    const { COLORS } = theme;

    async function handleSelectImage() { // Função para selecionar imagem
        setPhotoLoading(true);

        try{
            
        const photoSelected = await ImagePicker.launchImageLibraryAsync({ // Abre a galeria de imagens
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // Apenas imagens
            allowsEditing: true, // Permite editar a imagem
            quality: 1, // Qualidade da imagem (0 a 1)
            aspect: [4, 4], // Proporção da imagem
        }); 


        if(photoSelected.canceled){
            return;
        }
        
        if (photoSelected.assets[0].uri){
            setUserPhoto(photoSelected.assets[0].uri);
        }
       
        } catch (error) {
            console.log(error);
        }   finally {
            setPhotoLoading(false);
        }
    }

    return (
        <Container>
            <Header>    
            <BackButton onPress={handleGoBack}>
                <CaretLeft size={30} color={COLORS.GRAY_300} />
            </BackButton>
            {photoLoading ? <UserPhoto source={LogoImg} width={100} height={100} defaultSource={LogoImg} /> : <UserPhoto source={{uri: userPhoto}} width={100} height={100} defaultSource={{uri: userPhoto}} />}
            <EditProfile onPress={handleSelectImage}>
                <Title>Editar Imagem</Title>
            </EditProfile>
            </Header>
            <Footer>
            <DivInput>
                <TitleInput>E-mail:</TitleInput>
                <InputText 
                value='user123@gmail.com' 
                placeholderTextColor={theme.COLORS.BRAND_ULTRALIGHT} 
                editable={false}
                />
                
            </DivInput>
            <DivInput>
                <TitleInput>Número:</TitleInput>
                <InputText 
                placeholder='(00) 00000-0000' 
                placeholderTextColor={theme.COLORS.BRAND_MID}
                returnKeyType="done"
                />
            </DivInput>
            <DivInput>
                <TitleInput>Alterar Senha</TitleInput>
                <InputText 
                placeholder='Nova Senha' 
                placeholderTextColor={theme.COLORS.BRAND_MID} 
                secureTextEntry
                returnKeyType="done"
                />
            </DivInput>
            <Space></Space>
            </Footer>
        </Container>
        
    )
}