import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type Props = {
    type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-width: 57%;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.BRAND_MID : theme.COLORS.BRAND_DARK};

    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme}) => css`
    
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};

    position: absolute;
    

    padding: 0 24px;

    `}`;

