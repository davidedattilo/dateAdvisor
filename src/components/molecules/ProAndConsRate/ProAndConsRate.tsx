import React from 'react'
import { Container, ProAndConsBox, RateBox, Title } from './styled'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box';
import { ProAndConsRateProps } from './models/ProAndConsRate.types';

const ProAndConsRate = ({ title, score, pros, cons }: ProAndConsRateProps) => {
    const prosList = pros.map((pro, i) =>
        <Box key={i}
            pl={2}
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <SentimentVerySatisfiedIcon color="success" />
            <Box pl={3}>
                <p>{pro}</p>
            </Box>
        </Box>
    );
    const consList = cons.map((con, i) =>
        <Box key={i}
            pl={2}
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <SentimentVeryDissatisfiedIcon color="error" />
            <Box pl={3}>
                <p>{con}</p>
            </Box>
        </Box>
    );
    return (
        <>
            <Container>
                <Box
                    pl={2}
                    sx={{
                        display: 'grid',
                        alignItems: 'left',
                    }}
                >
                    <Box>
                        <Rating name="date-rating" value={score} precision={0.5} readOnly />
                    </Box>
                    <Title>{title}</Title>
                </Box>
                <ProAndConsBox>
                    <RateBox>
                        {prosList}
                    </RateBox>
                    <RateBox>
                        {consList}
                    </RateBox>
                </ProAndConsBox>
            </Container>
        </>

    )
}

export default ProAndConsRate