import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
`;

export const Title = styled.Text`
    text-align: center;

    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.BRAND_MID};
    `;
export const SubTitle = styled.Text`
    text-align: center;

    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    `;