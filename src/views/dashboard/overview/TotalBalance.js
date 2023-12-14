// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Styled component for the trophy image
const TrophyImg = styled('img')({
    right: 36,
    bottom: -2,
    height: 155,
    position: 'absolute'
})

const TotalBalance = () => {
    return (
        <Card sx={{ position: 'relative' }}>
            <CardContent sx={{ py: theme => `${theme.spacing(5)} !important` }}>
                <Typography sx={{ mb: 1.25, fontWeight: 500 }}>Welcome, Katie!</Typography>
                <Typography variant='body2' sx={{ mb: 4.5 }}>
                    Today is great day to start crypto investment
                </Typography>
                <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.625rem !important' }}>
                    $48.9k
                </Typography>
                <Typography variant='body2' sx={{ mb: 2.5, color: 'text.disabled' }}>
                    Total Balance
                </Typography>
                <Button size='small' variant='contained'>
                    Send
                </Button>
                <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
            </CardContent>
        </Card>
    )
}

export default TotalBalance
