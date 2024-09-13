import styled, {css} from "styled-components/native";

export type propsSize = 'NORMAL' | 'PEQUENO'

type Props = {
    size: propsSize
}

const variante = (size: propsSize) => {
    return {
        PEQUENO: css`
            width: 32px;
            height: 32px;
        `,
        NORMAL: css`
            width: 46px;
            height: 46px;
        `,
    }[size]
}

export const Container = styled.View<Props>`
    border-radius: 50px;
    background-color: ${({theme}) => theme.COLORS.BRAND_LIGHT};

    justify-content: center;
    align-items: center;

    margin-right: 12px;

    ${({ size }) => variante(size)}
`