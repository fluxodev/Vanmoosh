import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 80%;
    height: 110px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.WHITE_GRAY};
`;

export const TextSup = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.P}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    top: 10px;
    left: 12px;
`;

export const Placa = styled.TextInput`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    text-align: center;
    margin-top: 16px;
`;

