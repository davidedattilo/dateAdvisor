import { Box } from '@mui/material'
import React from 'react'
import AvatarImage from '../../atoms/AvatarImage'
import { AvatarAndProfileInfoProps } from './models/AvatarAndProfileInfo.types'

import {
    Container,
    AvatarBox,
    FullNameBox,
    LocateBox,
    ShortDescriptionBox
} from './styled'

const AvatarAndProfileInfo = ({ id, avatarSrc, avatarAlt = 'Your alt text here', full_name, locate, short_description }: AvatarAndProfileInfoProps) => {
    return (
        <Container>
            <AvatarBox>
                <AvatarImage addCircle={false} width={150} height={150} src={avatarSrc} alt={avatarAlt} />
            </AvatarBox>
            <Box pt={2}>
                <FullNameBox>{full_name}</FullNameBox>
                <LocateBox>{locate}</LocateBox>
                <ShortDescriptionBox>{short_description}</ShortDescriptionBox>
            </Box>
        </Container>
    )
}

export default AvatarAndProfileInfo