import { Header, Container, Footer, BackButton, EditProfile, Title, InputText, DivInput, TitleInput, Space } from "./styles";
import { CaretLeft } from 'phosphor-react-native';
import { UserPhoto } from "@components/UserPhoto";
import { useNavigation } from '@react-navigation/native';
import theme from "@theme/index";
import LogoImg from '@assets/logo.png';
import { SchoolNavigatorRoutesProps } from "@routes/Routes_School/app.routes";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { getUserEmail } from "@utils/getEmail";

export default function EditAccount() {
    const [photoLoading, setPhotoLoading] = useState(false);
    const [email, setEmail] = useState('Carregando...');
    const [userPhoto, setUserPhoto] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
    const navigation = useNavigation<SchoolNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.navigate('Account_School');
    }

    const { COLORS } = theme;

    async function handleSelectImage() {
        setPhotoLoading(true);

        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
                aspect: [4, 4],
            });

            if (photoSelected.canceled) {
                return;
            }

            if (photoSelected.assets[0].uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

                if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 3) {
                    Alert.alert('Erro', 'A imagem não pode ser maior que 5MB');
                }

                setUserPhoto(photoSelected.assets[0].uri);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setPhotoLoading(false);
        }
    }

    async function fetchUserEmail() {
        try {
            const emailFetched = await getUserEmail();

            if (emailFetched) {
                setEmail(emailFetched);
            } else {
                setEmail('Email não encontrado.');
            }
        } catch (error) {
            console.error("Erro ao buscar o email:", error);
            setEmail('Erro ao carregar o email.');
        }
    }

    useEffect(() => {
        fetchUserEmail();
    }, []);

    return (
        <Container>
            <Header>
                <BackButton onPress={handleGoBack}>
                    <CaretLeft size={30} color={COLORS.GRAY_300} />
                </BackButton>
                {photoLoading ? (
                    <UserPhoto source={LogoImg} width={100} height={100} defaultSource={LogoImg} />
                ) : (
                    <UserPhoto source={{ uri: userPhoto }} width={100} height={100} defaultSource={{ uri: userPhoto }} />
                )}
                <EditProfile onPress={handleSelectImage}>
                    <Title>Editar Imagem</Title>
                </EditProfile>
            </Header>
            <Footer>
                <DivInput>
                    <TitleInput>E-mail:</TitleInput>
                    <InputText
                        value={email}
                        placeholderTextColor={theme.COLORS.BRAND_ULTRALIGHT}
                        editable={false}
                    />
                </DivInput>
                <Space />
            </Footer>
        </Container>
    );
}
