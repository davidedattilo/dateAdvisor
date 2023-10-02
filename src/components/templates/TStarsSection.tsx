import PrincipalAndCollapsedBox from '@components/organism/PrincipalAndCollapsedBox';
import { Box, Divider, Rating } from '@mui/material';
import styled from 'styled-components';

export const RatingBoxContainer = styled.div`
    display: flex;
    margin: 0;
    justify-content: center;
`


const TStarsSection = ({ data }) => {
    const { principal_and_collapsed_box } = data;
    return (
        <Box>
            <RatingBoxContainer>
                <Rating name="global-rate" value={principal_and_collapsed_box.global_score} precision={0.5} readOnly />
            </RatingBoxContainer>
            <Box pb={2} pt={5}>
                <Divider />
                <PrincipalAndCollapsedBox {...principal_and_collapsed_box.stars}></PrincipalAndCollapsedBox>
            </Box>

        </Box>

    );
};

export default TStarsSection;