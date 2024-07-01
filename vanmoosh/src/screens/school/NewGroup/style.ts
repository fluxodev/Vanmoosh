import styled from "styled-components/native";
import { ListPlus } from "phosphor-react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(ListPlus).attrs(({ theme }) => ({
    color: theme.COLORS.BRAND_MID,
    size: 56,
}))`
    align-self: center;
`;
