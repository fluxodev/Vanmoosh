import styled, {css} from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  margin-top:${Platform.OS === 'ios' ? -70 : 0}px;
  height: ${Platform.OS === 'ios' ? 35 : 35}%;
  background-color: ${({ theme }) => theme.COLORS.BRAND_ULTRALIGHT};
  align-items: center;
  justify-content: center;
  top: auto;
`;

export const Footer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BackButton = styled.TouchableOpacity`
    margin-right: auto;
    margin-top: ${Platform.OS === 'ios' ? 10 : 5}%;
`;

export const EditProfile = styled.Pressable`
`; 

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.BRAND_MID};
    margin-top: 10px;
`;
export const TitleInput = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    left: auto;


`;

export const DivInput = styled.View`
    height: 17%;
    justify-content: center;
    width: 80%;  
`;

export const Space = styled.View`
    height: 45%;
    justify-content: center;
    width: 80%;  
`;

export const InputText = styled.TextInput`

${({ theme }) => css`
    flex: 1;

    width: 100%;
    
    min-height: 56px;
    max-height: 56px;
    
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.BRAND_MID};
    


    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-color: ${theme.COLORS.GRAY_400};
    border-bottom-width: 1px;
    border-radius: 6px;
    padding: 16px;
`}
`;