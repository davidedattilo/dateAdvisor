import { BadgeSection, DescriptionBox, MainProfileSection, ProfilePageContainer, RateProfileSection, StarsSection, ChatSection } from '@components/templates/StyledTemplateAndPages';
import TBadgeSection from '@components/templates/TBadgeSection';
import TMainProfileSection from '@components/templates/TMainProfileSection';
import TRateCards from '@components/templates/TRateCardsSection';
import TStarsSection from '@components/templates/TStarsSection';
import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material'
import { getUserInfo } from '@utils/utility';
import SendIcon from '@mui/icons-material/Send';

interface Props {
    profileData: any;
}



const ProfilePage = ({ profileData }: Props) => {
    const loggedUser = getUserInfo();
    const [profile, setProfile] = useState(profileData);
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
    const changeProfileData = (newProfileData) => {
        handleToggleBackdrop();
        setProfile(newProfileData);
    };

    function handleCloseBackdrop() {
        setOpenBackdrop(false);
    }

    function handleToggleBackdrop() {
        setOpenBackdrop(!openBackdrop);
        window.scrollTo(0, 0)
        setTimeout(() => {
            handleCloseBackdrop();
        }, 2000);
    }

    let isMyProfile = profile.first_section.avatar_and_profile_info.id === loggedUser.id


    if (profile) {
        return (
            <>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={openBackdrop}
                    onClick={handleCloseBackdrop}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <ProfilePageContainer />
                {/* Main Profile Section */}
                <MainProfileSection>
                    <TMainProfileSection data={profile.first_section}></TMainProfileSection>
                </MainProfileSection>

                {/* Stars Section */}
                <StarsSection>
                    <TStarsSection data={profile.second_section}></TStarsSection>
                </StarsSection>

                <BadgeSection>
                    <TBadgeSection data={profile.badge_section} isMyProfile={isMyProfile}></TBadgeSection>
                </BadgeSection>

                {!isMyProfile ?
                    (<ChatSection>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Date me!
                        </Button>
                    </ChatSection>) : (<></>)
                }

                <DescriptionBox>
                    <Typography>{profile.first_section.avatar_and_profile_info.long_description}</Typography>
                </DescriptionBox>

                {/* Rates Section Section */}
                <RateProfileSection>
                    <TRateCards data={profile.third_section} changeProfileData={changeProfileData} />
                </RateProfileSection>
            </>
        );
    } else { return (<></>) }
}


export default ProfilePage