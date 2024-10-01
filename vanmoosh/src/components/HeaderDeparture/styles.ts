import styled from "styled-components/native";



export const Container = styled.SafeAreaView`
    width: 100%;
    height: 60px;

    
    flex-direction: row;
    align-items: center;
    
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    position: absolute;
    top: 50px;
    

`;

export const Title = styled.Text`
    color : ${({ theme }) => theme.COLORS.BRAND_MID};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

    left: 170%;
    position: fixed;
`;

export const BackButton = styled.TouchableOpacity`
    right: -10px;
`;