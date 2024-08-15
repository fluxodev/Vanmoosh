import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
`;
export const Margin = styled.View`
    height: 100px;
    width: 100%;
`;
