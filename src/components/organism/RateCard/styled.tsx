import styled, { css } from 'styled-components'
import { device } from '../../../assets/designSystem/mediaqueries'

export const Container = styled.div`
    display: block;
    top: 0px;
    position: relative;
    background-color: #f2f8f9;
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #f2f8f9;
    border-radius: 15px;
    text-decoration: none;
    overflow: hidden;
    @media ${device.desktop || device.laptopL} {
        width: 1024px;
        min-height: 240px;
      }
      @media ${device.laptop || device.tablet || device.mobileL} {
        width: 100%;
      }
       &:hover {
    transition: all 0.2s ease-out;
    border: 1px solid #00838d;
    z-index: 500;
    top: -4px;
    background-color: white;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-out;
  }

  &:hover:before {
    transform: scale(2.15);
  }
`

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    justify-content: space-between;
    height: 100%;
`

export const Label = styled.span`
    border-radius: 12px;
    background-color: #d1fae5;
    color: #065f46;
    font-size: 14px;
    line-height: 20px;
    padding: 4px 8px;
`

export const Name = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
`

export const Date = styled.p`
    font-size: 14px;
    font-style: italic;
    line-height: 20px;
    color: #6b7280;
`

export const AvatarAndText = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    width: 100%;
    @media ${device.laptop || device.tablet || device.mobileL} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    
`

export const AuthorDate = styled.div`
    padding-left: 12px;
    width: 14%;
    @media ${device.laptop || device.tablet || device.mobileL} {
        width: 100%;
        padding-bottom: 3rem;
      }
`

export const ProAndCons = styled.div`
    padding-left: 12px;
    width: 100%;
    @media ${device.laptop || device.tablet || device.mobileL} {
        padding-left: 0;
        grid-column-start: 1;
        grid-column-end: 4;
      }
`

export const BoxClick = styled.div`
    cursor: pointer
`

export const BadgeSelectedContainer = styled.div`
    position: absolute;
    top: 7rem;
    @media ${device.desktop || device.laptopL} {
    }
    @media ${device.laptop || device.tablet || device.mobileL} {
    }
`

export const ImageNecklace = styled.div`
position:absolute;
${props => {
    switch (props.left) {
      case 'image_0':
        return `
        top: 11px;
        left: 25px;
        z-index:2;
  `
      case 'image_1':
        return `
        top: 0px;
        left: 6px;
  `
      case 'image_2':
        return `
        top: 0px;
        left: 45px;
`
      default:
        return "";
    }
  }}
`