import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    
    align-items: center;
    justify-content: center;
`;

export const Body = styled.View`
    margin-top: -70;
    align-items: center;
    justify-content: space-around;
`;

export const PositionButton = styled.View`
    margin-top: 210;
`;