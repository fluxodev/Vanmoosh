import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 20px
`;

export const Line = styled.View`
  height: 20px;
  width: 1px;
  margin: 20px;
  left: 275px;
  border-width: 1px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_400};
`
