import styled from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons';

export const Container = styled.View`
    height: 100;
    width: 100%;

    margin-top: -100;
    margin-left: 60;
    

`;

export const Title = styled.Text`


    font-size: 20;
    color: ${({theme}) => theme.COLORS.BRAND_LIGHT};

`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 90,
    color: theme.COLORS.GRAY_100
  }))`

  margin-left: 260;
  margin-top: -60;
  
  `;