import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;
`;

export const Body = styled.View`
    margin-top: 30px;
`;

export const Scroll = styled.ScrollView`
    
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.BLACK};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;

    margin-top: 5%;
`;

export const Line = styled.View`
     margin-top: 5px;
     height: 1px;

     background-color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const Box = styled.View`
    height: 7%;
`;