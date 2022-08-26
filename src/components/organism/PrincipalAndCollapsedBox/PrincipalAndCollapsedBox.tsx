import { Accordion, AccordionDetails, AccordionSummary, Rating, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Container,
    BoxPrincipalContainer,
    StarDescriptionBox,
    ContainerCollapsed,
    BoxSecondaryContainer,
    BoxField,
    TextField
} from './styled'

import { makeStyles } from '@material-ui/core';
import { PrincipalAndCollapsedBoxProps } from './models/PrincipalAndCollapsedBox.types';

const useStyles = makeStyles({
    accordion: {
        boxShadow: 'none',
        position: 'initial'
    },
    icon: {
        display: 'grid'
    }
})


const PrincipalAndCollapsedBox = ({ principal_stars, collapsed_stars }: PrincipalAndCollapsedBoxProps) => {
    const classes = useStyles()
    return (
        <Container>
            <BoxPrincipalContainer>
                {principal_stars?.map((principal_star, i) => (
                    <StarDescriptionBox key={i}>
                        <Typography component="legend">{principal_star.label}</Typography>
                        <Rating name="principal-rate" value={principal_star.score} precision={0.5} readOnly />
                    </StarDescriptionBox>
                ))}
            </BoxPrincipalContainer>
            <BoxSecondaryContainer>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="collapsed-stars-content"
                        id="collapsed-stars-header"
                        className={classes.icon}
                    >
                    </AccordionSummary>
                    <AccordionDetails>
                        <ContainerCollapsed>
                            {collapsed_stars?.map((collapsed_star, i) => (
                                <BoxField key={i}>
                                    <TextField>
                                        <Typography component="legend">{collapsed_star.label}</Typography>
                                    </TextField>
                                    <Rating name="secondary-rate" value={collapsed_star.score} precision={0.5} readOnly />
                                </BoxField>
                            ))}
                        </ContainerCollapsed>
                    </AccordionDetails>
                </Accordion>
            </BoxSecondaryContainer>
        </Container>

    )
}

export default PrincipalAndCollapsedBox