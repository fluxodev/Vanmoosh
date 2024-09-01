import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;

`;

export const MarginBetweenButtons = styled.View`
    height: 20px;
    width: 10px;
`;