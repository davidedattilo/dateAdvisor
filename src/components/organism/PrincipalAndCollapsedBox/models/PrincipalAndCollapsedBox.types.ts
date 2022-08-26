export interface PrincipalAndCollapsedBoxProps {
    principal_stars: StarBox[],
    collapsed_stars: StarBox[]
}

interface StarBox {
    label: string,
    score: number
}