// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const FaucetCrypto = () => {
    return (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
                }}
            >
                <CustomAvatar skin='light' sx={{ width: 50, height: 50, mb: 2.25 }}>
                    <Icon icon='bx:dollar-circle' fontSize='2rem' />
                </CustomAvatar>
                <Typography variant='h6' sx={{ mb: 2.75 }}>
                    Crypto Faucet
                </Typography>
                <Typography variant='body2' sx={{ mb: 6 }}>
                    Daily certain amounts of claims will be available.
                </Typography>
                <Button variant='contained' sx={{ p: theme => theme.spacing(1.75, 5.5) }}>
                    Claim Now
                </Button>
            </CardContent>
        </Card>
    )
}

export default FaucetCrypto
