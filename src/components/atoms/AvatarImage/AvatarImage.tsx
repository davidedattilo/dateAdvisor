import React from 'react'
import { AvatarImageProps } from './models/AvatarImage.types'
import { Image } from './styled'

const AvatarImage = ({ alt, src, isGrey = false, isBadge = false, addCircle = false, width = 50, height = 50, onClick }: AvatarImageProps) => {
    return <Image width={width} height={height} src={src} alt={alt} isGrey={isGrey} addCircle={addCircle} isBadge={isBadge} onClick={onClick}/>
}

export default AvatarImage