
import { Header, HeaderBox, NameSchool } from './styles'

import header from '@assets/header.png'

type Props ={
  name: string,
  type: string,
}

export function HeaderLogo({name, type}: Props) {
  return (

      <HeaderBox>
        <Header source={header} defaultSource={header}>
          <NameSchool>{name}</NameSchool>
        </Header>
      </HeaderBox>

  )
}