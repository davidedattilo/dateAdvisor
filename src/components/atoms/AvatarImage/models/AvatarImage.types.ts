export interface AvatarImageProps {
    alt: string
    src: string
    isGrey?: boolean
    addCircle: boolean
    isBadge?: boolean
    width: number
    height: number
    onClick?: (event: React.MouseEvent<HTMLElement>) => void; 
}