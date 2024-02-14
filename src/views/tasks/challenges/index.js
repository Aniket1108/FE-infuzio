// ** React Imports
import { useState, useEffect, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import { Snackbar, Alert, } from '@mui/material';

// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { useHttp } from 'src/@core/utils/api_intercepters';

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'
import { number } from 'yup'



const statusObj = {
    true: { title: 'completed', color: 'success' },
    false: { title: 'not completed', color: 'error' },
};



const UserChallenges = () => {
    // ** States
    const [hideNameColumn, setHideNameColumn] = useState(false)
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5, })
    const [allChallenges, setAllChallenges] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarValues, setSnackbarValues] = useState({
        message: '',
        severity: 'warning',
    });

    const useHttpMethod = useHttp()


    useEffect(() => {

        useHttpMethod.get('/faucet/earn/list-challenges').then(res => {
            if (res.statusCode !== 200) {
                setSnackbarValues({ message: response.message, severity: 'error' });
                setOpenSnackbar(true);
            }
            setAllChallenges(res.payload)

        })

    }, []);

    const handleClaim = async (claimId) => {
        try {
            const response = await useHttpMethod.get(`/faucet/earn/claim-challenges?claimId=${claimId}`);
            if (response.statusCode !== 200) {
                setSnackbarValues({ message: response.message, severity: 'error' });
                setOpenSnackbar(true);
            } else {
                setSnackbarValues({ message: response.message, severity: 'success' });
                setOpenSnackbar(true);
                useHttpMethod.get('/faucet/earn/list-challenges').then(res => {
                    setAllChallenges(res.payload);
                });
            }
        } catch (error) {
            console.error('Error claiming challenge:', error);
            setSnackbarValues({ message: response.message, severity: 'error' });
            setOpenSnackbar(true);
        }
    };



    const columns = [

        {
            flex: 0.25,
            minWidth: 100,
            field: 'name',
            headerName: 'Challenge Name',
            sortable: false,
            renderCell: (params) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {params.row.name}
                    </Typography>
                </Box>
            ),
        },
        {
            flex: 0.175,
            minWidth: 120,
            headerName: 'Type of Challenge',
            field: 'service',
            sortable: false,
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.service}
                </Typography>
            )
        },
        {
            flex: 0.1,
            minWidth: 80,
            field: 'isCompleted',
            headerName: 'Status',
            type: 'singleSelect',
            sortable: false,
            renderCell: (params) => {
                const isCompleted = params.row.isCompleted || false;
                const status = statusObj[isCompleted];

                return <CustomChip rounded size='small' skin='light' color={status.color} label={status.title} />;
            },
        },
        {
            flex: 0.15,
            field: 'count',
            minWidth: 180,
            type: 'number',
            headerName: 'Claimed / Total Count',
            sortable: false,
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.successCount > params.row.count ? params.row.count : params.row.successCount} / {params.row.count}
                </Typography>
            )
        },
        {
            flex: 0.1,
            field: 'reward',
            minWidth: 100,
            type: 'number',
            headerName: 'Reward',
            sortable: false,
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.reward} $
                </Typography>
            )
        },

        {
            flex: 0.125,
            minWidth: 130,
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            renderCell: params => [
                <Button key={params.row._id} size='small' variant='outlined' color='secondary' onClick={() => handleClaim(params.row._id)}>
                    Claim
                </Button>,
            ],
        },
    ];

    const rows = allChallenges.map((item, index) => {
        return {
            _id: item._id,
            name: item.name,
            service: item.service,
            count: item.count,
            isCompleted: item.isCompleted,
            reward: item.reward,
            successCount: item.currentSuccessCount
        };
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Fragment>
            <Card>
                <CardHeader
                    title='Challenges' />
                {allChallenges.length > 0 && (
                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        disableColumnMenu
                        disableRowSelectionOnClick
                        pageSizeOptions={[5, 10, 25, 50]}
                        // pcountSizeOptions={[5, 10, 25, 50]}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        initialState={{ columns: { columnVisibilityModel: { name: hideNameColumn } } }}
                        getRowId={(row) => row._id}
                    />
                )}
            </Card>
            <Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={3000}>
                <Alert variant='filled' elevation={3} onClose={handleClose} severity={snackbarValues?.severity}>
                    {snackbarValues?.message}
                </Alert>
            </Snackbar>
        </Fragment>
    )
}

export default UserChallenges
