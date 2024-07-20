import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type Props = {
    type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-width: 65%;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme}) => css`
    
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BRAND_MID};
    font-family: ${theme.FONT_FAMILY.BOLD};
    padding: 0 24px;

    `}`;

