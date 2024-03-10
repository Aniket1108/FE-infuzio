import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { LinearProgress, Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material'

import { useHttp } from 'src/@core/utils/api_intercepters';

const verifyShortlink = () => {
    const router = useRouter()
    const shortlinkId = router.query.verifyShortlink

    const [dialougeTitle, setDialogueTitle] = useState('Verifying link...')
    const [dialougeDescription, setDialogueDescription] = useState('Your link is getting verified from the provider please stay on this page.')

    const [open, setOpen] = useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => {
        router.push('/tasks/shortlinks')
    }

    const useHttpMethod = useHttp();
    useEffect(() => {
        if (shortlinkId) {

            handleClickOpen()

            useHttpMethod.get(`/faucet/earn/verify-shortlink?generatedId=${shortlinkId}`).then((res) => {
                if (res.statusCode !== 200) {
                    setDialogueTitle('Verification Failed')
                    setDialogueDescription(res.message)
                } else {
                    setDialogueTitle('Link verified')
                    setDialogueDescription(res.message)
                }
            });

        }
    }, [shortlinkId])

    return (
        <div>
            <Fragment>
                <Dialog
                    open={open}
                    disableEscapeKeyDown
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'
                    onClose={(event, reason) => {
                        if (reason !== 'backdropClick') {
                            handleClose()
                        }
                    }}
                >
                    <DialogTitle id='alert-dialog-title'>{dialougeTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            {dialougeDescription}
                        </DialogContentText>
                        <DialogContentText id='alert-dialog-description'>
                            Verification ID - {shortlinkId}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                    <LinearProgress />
                </Dialog>
            </Fragment>
        </div>
    )
}

export default verifyShortlink
