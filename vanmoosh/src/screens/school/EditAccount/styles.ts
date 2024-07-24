import styled from "styled-components/native";

export const Header = styled.View`
  flex: 1;
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BRAND_ULTRALIGHT};
`;
export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;