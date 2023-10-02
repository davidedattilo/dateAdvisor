import styled from 'styled-components'
import { device } from '../../../assets/designSystem/mediaqueries';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.laptop || device.tablet || device.mobileL || device.mobileM || device.mobileS} {
        padding-top: 2rem;
      }
`

export const ProAndConsBox = styled.div`
    float:left; 
    width:100%;
    padding-top: 2rem;
    @media ${device.laptop || device.tablet || device.mobileL} {
        padding-top: 1rem;
        padding-left: 0;
      }
`

export const RateBox = styled.div`
    float:left; 
    width:50%;
    @media ${device.laptop || device.tablet || device.mobileL} {
        width: 100%;
      }
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
`