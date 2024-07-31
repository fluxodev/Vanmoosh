import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;

`;

export const HeaderMargin = styled.View`
position: absolute;
top: 0;
margin-top: 50px;
`;

export const Margin = styled.View`
    position: absolute;
    top: 110px;
    height: 170px;
    width: 90%;
`;