import styled from 'styled-components'
import { device } from '../../../assets/designSystem/mediaqueries';

export const Container = styled.div`
    background: #ffffff;
    display: contents;
    @media ${device.desktop || device.laptopL} {
        width: 1024px;
      }
    padding: 16px;
    @media ${device.laptop || device.tablet || device.mobileL} {
        width: 100%;
      }
`

export const BoxPrincipalContainer = styled.div`
@media ${device.desktop || device.laptopL} {
  display: flex;
  margin: 0;
  justify-content: center;
}
@media ${device.laptop || device.tablet || device.mobileL} {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media ${device.mobileM || device.mobileS} {
  display: grid;
  grid-template-columns: 1fr;
}
`

export const BoxSecondaryContainer = styled.div`
    margin-top: -3rem;
`

export const StarDescriptionBox = styled.div`
    padding: 40px 40px 40px 40px;
    display: block;
`

export const ContainerCollapsed = styled.div`
@media ${device.desktop || device.laptopL} {
display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-rows: 40px;
grid-gap: 1rem;
}
@media ${device.laptop || device.tablet || device.mobileL} {
  display: grid;
  grid-template-columns: 1fr;
}
`

export const BoxField = styled.div`
padding: 0.5rem;
display: flex;
`

export const TextField = styled.div`
@media ${device.desktop || device.laptopL} {
    width: 220px;
  }
  @media ${device.laptop || device.tablet || device.mobileL} {
    width: 100%;
  }
`