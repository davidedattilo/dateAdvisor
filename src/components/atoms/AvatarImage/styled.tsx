import styled, { css } from 'styled-components';

export const Image = styled.img<{ isGrey: boolean }>`
${(props) => props.width && css`
height: ${props.height}px;
width: ${props.width}px;
border-radius: ${props.width - 20}px;
`}
object-fit: cover;
filter: ${(p) => (p.isGrey ? 'grayscale(100%)' : 'none')};
border: ${(p) => (p.addCircle ? '2px solid #ffd700;' : 'none')};
&:hover{
    cursor: pointer;
    border: ${(p) => (p.isBadge ? '2px solid #ffd700;' : 'none')};
}
`