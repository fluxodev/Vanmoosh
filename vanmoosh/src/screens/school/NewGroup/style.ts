import styled from "styled-components/native";
import { ListPlus } from "phosphor-react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
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
