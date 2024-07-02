import styled, {css} from "styled-components/native";

import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    height: 76px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};

    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    `;

    export const Name = styled.Text`
    flex: 1;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_800};
    `}
    `;
    export const RegisterAcademic = styled.Text`
    flex: 1;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_800};
    `}
    `;

    export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
        size: 24,
        color: theme.COLORS.BRAND_MID
    }))`
    margin-left: 12px;
    margin-right: 3px;
    `;