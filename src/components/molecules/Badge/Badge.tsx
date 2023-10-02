import { Image } from '@components/atoms/AvatarImage/styled'
import React from 'react'
import { BadgeProps } from './models/Badge.types'
import { Card, Container, Title, Text, Date } from './styled'

const Badge = ({ id, unlocked, date_unlock, title, description, selected, img, alt, width, height, showOnlyTitle = false }: BadgeProps) => {
    return (
        <>
            <Container>
                <Card key={id} showOnlyTitle={showOnlyTitle} unlocked={unlocked}>
                    <Image width={width} height={height} src={img} alt={alt} isGrey={!unlocked} addCircle={selected} isBadge={unlocked} />
                    <Date>{date_unlock}</Date>
                    <Title>{title}</Title>
                    <Text>{description}</Text>
                </Card>
            </Container>
        </>

    )
}

export default Badge