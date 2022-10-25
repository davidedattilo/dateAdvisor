import Badge from '@components/molecules/Badge/Badge'
import { Backdrop, CircularProgress, Dialog, DialogActions, DialogContent } from '@mui/material'
import React from 'react'
import { Reveal, Tween } from 'react-gsap'
import { BadgeRowProps } from './models/BadgeRow.types'
import { BoxPrincipalContainer, BoxSecondaryContainer, Container, BadgeRowWrapper, TitleModal } from './styled'

const BadgeRow = ({ all_badges, isMyProfile }: BadgeRowProps) => {
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [badgeSelected, setBadge] = React.useState(all_badges);


    const itemsFrag = all_badges?.filter(x => x.selected).map((selected_badge, i) => {
        return (
            <Badge showOnlyTitle={true} {...selected_badge} key={i} />
        );
    });

    function handleCloseBackdrop() {
        setOpenBackdrop(false);
    }

    function handleToggleBackdrop() {
        setOpenBackdrop(!openBackdrop);
        setTimeout(() => {
            handleCloseBackdrop();
            handleClickOpenDialog();
        }, 2000);
    }

    function handleClickOpenDialog() {
        setOpenDialog(true);
    }

    function handleCloseDialog() {
        setOpenDialog(false);
    }

    function showAllBadges() {
        handleToggleBackdrop();
    }

    function choseBadge(event: React.MouseEvent<HTMLButtonElement>, badge_selected) {
        if (badge_selected.unlocked && badge_selected.selected) {
            badge_selected.selected = false;
            setBadge(badge_selected);
            return;
        }
        let selected = all_badges?.filter(x => x.selected);
        if (selected.length <= 2) {
            badge_selected.unlocked ? badge_selected.selected = !badge_selected.selected : '';
            setBadge(badge_selected);
        } else {

        }
    }


    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
                onClick={handleCloseBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {itemsFrag && itemsFrag.length > 0 ? (
                <Container>
                    {isMyProfile ? (
                        <BoxPrincipalContainer onClick={() => showAllBadges()}>
                            {itemsFrag}
                        </BoxPrincipalContainer>
                    ) :
                        (
                            <BoxPrincipalContainer>
                                {itemsFrag}
                            </BoxPrincipalContainer>
                        )}
                </Container>
            ) : (
                <Container>
                    {isMyProfile ? (
                        <BoxPrincipalContainer onClick={() => showAllBadges()}>
                            <TitleModal>Seleziona i tuoi Badge preferiti!</TitleModal>
                        </BoxPrincipalContainer>
                    ) :
                        (
                            <>
                            </>
                        )}

                </Container>

            )}


            <Dialog
                fullWidth={true}
                maxWidth={'xl'}
                open={openDialog}
                onClose={handleCloseDialog}
                PaperProps={{
                    style: {
                        backgroundColor: '#f2f8f9',
                        boxShadow: '2px 2px 10px 5px rgb(0 0 0 / 10%)',
                        border: '1px solid #f2f8f9',
                        borderRadius: '15px',
                        overflow: 'hidden'
                    },
                }}
            >
                <TitleModal>
                    {"Seleziona fino ad un massimo di 3 Badges da usare sul tuo profilo."}
                </TitleModal>
                <DialogContent>
                    <Container>
                        <BoxSecondaryContainer>
                            {all_badges?.map((selected_badge, i) => (
                                <Reveal key={i}>
                                    <Tween from={{ y: '120px', opacity: 0 }} duration={0.5} ease="none">
                                        <BadgeRowWrapper onClick={(e) => {
                                            choseBadge(e, selected_badge);
                                        }} key={i}>
                                            <Badge {...selected_badge} showOnlyTitle={false} />
                                        </BadgeRowWrapper>
                                    </Tween>
                                </Reveal>
                            ))}
                        </BoxSecondaryContainer>
                    </Container>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </>
    )
}

export default BadgeRow