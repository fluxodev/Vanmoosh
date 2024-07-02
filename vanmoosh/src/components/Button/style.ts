import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type Props = {
    type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-width: 95%;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.BRAND_MID : theme.COLORS.BRAND_DARK};

    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const Title = styled.Text`
    ${({ theme}) => css`
    
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    padding: 0 24px;

    `}`;

