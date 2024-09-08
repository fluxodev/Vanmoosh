import styled from "styled-components/native";

export const Container = styled.View`
    width: 80%;
    height: 10%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

export const Info = styled.View`
    flex: 1;
`

export const Description = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_800};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`
export const Label = styled.Text`
    color: ${({theme}) => theme.COLORS.BRAND_LIGHT};
    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`