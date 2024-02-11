// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'

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
    const [paginationModel, setPaginationModel] = useState({ pcount: 0, pcountSize: 5 })
    const [allChallenges, setAllChallenges] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const useHttpMethod = useHttp()


    useEffect(() => {

        useHttpMethod.get('/faucet/earn/list-challenges').then(res => {
            if (res.statusCode !== 200) {
                // setOpenSnackbar(true);
            }
            setAllChallenges(res.payload)

        })





    }, []);

    const handleClaim = async (claimId) => {
        try {
            // Trigger API for claiming challenge using your custom hook
            await useHttpMethod.get(`/faucet/earn/claim-challenges?claimId=${claimId}`);
            // You might want to refresh the data after claiming, you can refetch the data here.
            // fetchData();
        } catch (error) {
            console.error('Error claiming challenge:', error);
        }
    };



    const columns = [

        {
            flex: 0.25,
            minWidth: 100,
            field: 'name',
            headerName: 'Challenge Name',
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
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.service}
                </Typography>
            )
        },
        {
            flex: 0.15,
            minWidth: 110,
            field: 'isCompleted',
            headerName: 'Status',
            type: 'singleSelect',
            renderCell: (params) => {
                const isCompleted = params.row.isCompleted || false;
                const status = statusObj[isCompleted];

                return <CustomChip rounded size='small' skin='light' color={status.color} label={status.title} />;
            },
        },
        {
            flex: 0.1,
            field: 'count',
            minWidth: 160,
            type: 'number',
            headerName: 'Total No. of Count',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.successCount} / {params.row.count}
                </Typography>
            )
        },
        {
            flex: 0.1,
            field: 'reward',
            minWidth: 80,
            type: 'number',
            headerName: 'Reward',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.reward} $
                </Typography>
            )
        },

        {
            flex: 0.125,
            minWidth: 140,
            // field: 'actions',
            headerName: 'Actions',
            renderCell: params => [
                <Button size='small' variant='outlined' color='secondary' onClick={() => handleClaim(params.row._id)}>
                    Claim
                </Button>,
            ],
        },
    ];

    const rows = allChallenges.map((item, index) => {
        return {
            _id: item._id, // Add a unique id for each row
            name: item.name,
            service: item.service,
            count: item.count,
            isCompleted: item.isCompleted,
            reward: item.reward,
            successCount: item.currentSuccessCount
        };
    });


    return (
        <Card>
            <CardHeader
                title='Challenges' />
            {allChallenges.length > 0 && (
                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    disableRowSelectionOnClick
                    pcountSizeOptions={[5, 10, 25, 50]}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    initialState={{ columns: { columnVisibilityModel: { name: hideNameColumn } } }}
                    getRowId={(row) => row._id}
                />
            )}
        </Card>
    )
}

export default UserChallenges
