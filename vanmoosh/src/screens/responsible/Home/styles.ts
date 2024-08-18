import styled from "styled-components/native";

export const Container  = styled.SafeAreaView`
    width: 100%;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    

`;

export const Body = styled.View`
    margin-top: 100;
    margin-left: 20;
`;