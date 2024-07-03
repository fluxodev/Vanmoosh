import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 24px;
`;
export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  `;

export const HeaderList = styled.View`
width: 100%;

flex-direction: row;
align-items: center;

margin: 32px 0px 12px;
`;

export const Totality = styled.Text`
 ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_300};
`}
margin-top: 12px;
`;
