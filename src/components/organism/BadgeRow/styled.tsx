import styled from 'styled-components'
import { device } from '../../../assets/designSystem/mediaqueries'

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
@media ${device.laptop || device.tablet} {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
@media ${device.mobileL} {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media ${device.mobileM || device.mobileS} {
  display: grid;
  grid-template-columns: 1fr;
}
`

export const BoxSecondaryContainer = styled.div`
@media ${device.desktop || device.laptopL} {
  padding: 30px 30px 30px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
@media ${device.laptop || device.tablet} {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
@media ${device.mobileL} {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media ${device.mobileM || device.mobileS} {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
}
`

export const TitleModal = styled.div`
font-size: 24px;
    font-weight: 700;
    padding: 20px 0 20px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
`

export const BadgeRowWrapper = styled.div`
`