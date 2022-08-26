import AvatarAndProfileInfo from '@components/organism/AvatarAndProfileInfo';
import { Box } from '@mui/material';

const TMainProfileSection = ({ data }) => {
    const { avatar_and_profile_info } = data;

    return (
        <Box>
            <AvatarAndProfileInfo {...avatar_and_profile_info} />
        </Box>

    );
};

export default TMainProfileSection;