import { Image } from '@components/atoms/AvatarImage/styled'
import ProAndConsRate from '@components/molecules/ProAndConsRate'
import { getProfileDatabyId } from '@utils/utility'
import React from 'react'
import AvatarImage from '../../atoms/AvatarImage'
import { RateCardProps } from './models/RateCard.types'

import {
    Container,
    Layout,
    AvatarAndText,
    AuthorDate,
    Label,
    ProAndCons,
    Date,
    Name,
    BadgeSelectedContainer,
    ImageNecklace
} from './styled'

const RateCard = ({ id, label, avatarSrc, authorName, badgeSelectedImg, dateString, avatarAlt = 'Your alt text here', title, score, pros, cons, changeProfileData }: RateCardProps) => {
    function goToProfile(id) {
        let profileData = getProfileDatabyId(id);
        changeProfileData(profileData);
    }

    const badgeSelected = badgeSelectedImg?.map((selected_badge_image, i) => {
        return (
            <ImageNecklace left={'image_'+i} key={i}>
                <Image width={30} height={30} src={selected_badge_image} alt={selected_badge_image} isGrey={false} key={i} />
            </ImageNecklace>
        );
    });

    return (
        <Container>
            <Layout>
                {/*{!!label && (<Label>{label}</Label>)}*/}
                <AvatarAndText>
                    <AvatarImage onClick={() => goToProfile(id)} addCircle={false} width={80} height={80} src={avatarSrc} alt={avatarAlt} />
                    <AuthorDate>
                        <Name>{authorName}</Name>
                        <Date>{dateString}</Date>
                    </AuthorDate>
                    <ProAndCons>
                        <ProAndConsRate title={title} score={score} pros={pros} cons={cons}></ProAndConsRate>
                    </ProAndCons>
                </AvatarAndText>
                <BadgeSelectedContainer>
                    {badgeSelected}
                </BadgeSelectedContainer>
            </Layout>
        </Container>
    )
}

export default RateCard