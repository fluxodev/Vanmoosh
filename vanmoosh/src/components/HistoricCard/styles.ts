import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    height: 100px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_100};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 10px;
    margin-bottom: 12px;
`

export const Info = styled.View`
    flex: 1;
`

export const Plate = styled.Text`
    color: ${({theme}) => theme.COLORS.BRAND_MID};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-left: 10px;
`
export const Departure = styled.Text`
    color: ${({theme}) => theme.COLORS.BRAND_MID};
    font-size: ${({theme}) => theme.FONT_SIZE.XS}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    margin-top: 4px;
    margin-left: 10px;
`