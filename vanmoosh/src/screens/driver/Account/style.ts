import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;

`;

export const MarginButton = styled.View`
    margin-top: 110%;
`;

export const MarginCardButton = styled.SafeAreaView`
   margin-top: 30%;
`;