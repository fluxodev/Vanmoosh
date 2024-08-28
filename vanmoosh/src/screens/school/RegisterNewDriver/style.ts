import styled from "styled-components/native";



export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    
`;

export const Title = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Body = styled.View`
    height: 600px;
    width: 90%;

`;

export const Scroll = styled.ScrollView`
    height: 600;
`;
