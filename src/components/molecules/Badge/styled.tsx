import styled from 'styled-components'
import { device } from '../../../assets/designSystem/mediaqueries';


export const Container = styled.div`
width: 100%;
height: 100%;
    @media ${device.desktop || device.laptopL} {
        
      }
    @media ${device.laptop || device.tablet || device.mobileL} {
        
      }
`

export const Title = styled.div``;
export const Text = styled.div``;
export const Date = styled.div``;

export const Card = styled.div`
width: 100%;
max-width: 200px;
min-width: 150px;
height: 254px;
@media ${device.desktop || device.laptopL} {
  margin: 10px;
}
@media ${device.laptop || device.tablet || device.mobileL || device.mobileM || device.mobileS} {
  height: 300px;
  margin: 0;
}
font-size: 16px;   
transition: all 0.3s ease;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
}
${Title} {
  width: 100%;
  margin: 0;
  text-align: center;
  margin-top: 10px;
  color: #4d4d4d;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
}

${Text} {
  width: 80%;
   margin: 0 auto;
   font-size: 13px;
   text-align: center;
   margin-top: 10px;
   color: #4d4d4d;
   font-weight: 300;
   letter-spacing: 2px;
   opacity: ${(p) => (p.showOnlyTitle ? '0' : '1')};
   max-height:0;
   transition: all 0.3s ease;
}

${Date}{
    opacity: ${(p) => (p.showOnlyTitle ? '0' : '1')};
    font-style: italic;
    font-weight: 300;
    font-size: 10px;
    margin-top: 8px;
    padding: 2px 0 20px 0;
    display: flex;
    justify-content: center;
    max-height:0;
    transition: all 0.3s ease;
}

&:hover ${Text} {
  transition: all 0.3s ease;
  opacity: 1;
  max-height: ${(p) => (p.unlocked ? '40px' : '')};
}
&:hover ${Title} {
  transition: all 0.3s ease;
  opacity: 1;
  max-height: ${(p) => (p.unlocked ? '40px' : '')};
}
&:hover ${Date} {
  transition: all 0.3s ease;
  opacity: 1;
  max-height: ${(p) => (p.unlocked ? '40px' : '')};
}
`
