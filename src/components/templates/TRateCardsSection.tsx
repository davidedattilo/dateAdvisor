import RateCard from '@components/organism/RateCard';
import { Box } from '@mui/material';
import { Reveal, Tween } from 'react-gsap';

const TRateCards = (props) => {
    const { data, changeProfileData } = props;
    let cards = data.cards
    return (
        <>
            {cards && cards.length > 0 ? (
                <Box>
                    {cards?.map((card, i) => (
                        <Reveal key={i}>
                            <Tween from={{ y: '120px', opacity: 0 }} duration={0.5} ease="none">
                                <Box pb={4}>
                                    <RateCard {...card} changeProfileData={changeProfileData} />
                                </Box>
                            </Tween>
                        </Reveal>
                    ))}
                </Box>
            ) : (
                <Box>
                    <h3>Nessuna Recensione.</h3>
                </Box>
            )}
        </>
    );
};

export default TRateCards;