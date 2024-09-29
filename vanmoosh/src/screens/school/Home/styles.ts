import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;

`;


export const ViewButton = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 90%;
    flex-direction: row;
`;

export const MarginBetweenButtons = styled.View`
    height: 100px;
    width: 10px;
`;