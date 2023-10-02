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

export const AvatarBox = styled.div`
   display: flex;
   justify-content: center;
`

export const FullNameBox = styled.div`
   font-size:24px;
   font-weight: 700;
   padding: 2px 0 2px 0;
   display: flex;
   justify-content: center;
`

export const LocateBox = styled.div`
    font-style: italic;
    font-weight: 300;
    padding: 2px 0 2px 0;
    display: flex;
    justify-content: center;
`

export const ShortDescriptionBox = styled.p`
    padding: 2px 0 2px 0;
    display: flex;
    justify-content: center;
`