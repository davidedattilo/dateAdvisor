import styled from 'styled-components';
import { device } from '../../assets/designSystem/mediaqueries'

export const ProfilePageContainer = styled.div`
width: 100%;
color: white;
background: -webkit-linear-gradient(222.28deg, #064497 0%, #A72879 35.52%, #E3000F 68.21%, #F08300 100%);
background: linear-gradient(227.72deg, #064497 0%, #A72879 35.52%, #E3000F 68.21%, #F08300 100%);
text-align: center;
height: 10rem;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
`

export const MainProfileSection = styled.div`
    margin-top: -7rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RateProfileSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StarsSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BadgeSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DescriptionBox = styled.div`
    display: flex;
    padding-top: 2rem;
    padding-bottom: 5rem;
    margin: auto;
    @media ${device.desktop || device.laptopL} {
        width: 1024px;
        margin-bottom: 0;
      }
      @media ${device.laptop || device.tablet || device.mobileL} {
        width: 100%;
        padding: 0;
        margin-bottom: 20px;
        text-align: center;
      }
`

export const ChatSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
`