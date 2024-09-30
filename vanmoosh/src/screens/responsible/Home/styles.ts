import styled from "styled-components/native";

export const Container  = styled.SafeAreaView`
    width: 100%;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    

`;

export const Body = styled.View`
    margin-top: 5%;
`;

export const Agregate = styled.Text`
    color: ${({theme}) => theme.COLORS.BLACK};
    font-size: ${({theme}) => theme.FONT_SIZE.XL};

    margin-left: 30px;
    margin-top: 80%;
`;

export const NumberAgregate = styled.Text`
    margin-top: -20px;
    margin-left: 90%;

    color: ${({theme}) => theme.COLORS.GRAY_300}
`;

export const Line = styled.View`
    width: 90%;
    height: 1px;
    
    margin-top: 15px;
    margin-left: 5%;

    background-color: ${({theme}) => theme.COLORS.GRAY_200};
`;