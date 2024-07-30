import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
    padding: 22px;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    flex-direction: row;
    align-items: center;

`;

