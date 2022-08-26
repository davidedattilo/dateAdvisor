import BadgeRow from '@components/organism/BadgeRow';
import { Box } from '@mui/material';

const TBadgeSection = (props) => {
    const { data, isMyProfile } = props;
    return (
        <Box>
            <BadgeRow {...data.badges} isMyProfile={isMyProfile} />
        </Box>

    );
};

export default TBadgeSection;