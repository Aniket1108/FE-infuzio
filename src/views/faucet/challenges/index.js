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

// ** renders client column
// const renderClient = params => {
//     const { row } = params
//     const stateNum = Math.floor(Math.random() * 6)
//     const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
//     const color = states[stateNum]
//     if (row.avatar.length) {
//         return <CustomAvatar src={`/imcounts/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
//     } else {
//         return (
//             <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
//                 {getInitials(row.full_name ? row.full_name : 'John Doe')}
//             </CustomAvatar>
//         )
//     }
// }

const statusObj = {
    true: { title: 'completed', color: 'success' },
    false: { title: 'not completed', color: 'error' },
};



// ** Full Name Getter
// const getFullName = params =>
//     toast(
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             {renderClient(params)}
//             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                 <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
//                     {params.row.full_name}
//                 </Typography>
//             </Box>
//         </Box>
//     )

const UserChallenges = () => {
    // ** States
    const [hideNameColumn, setHideNameColumn] = useState(false)
    const [paginationModel, setPaginationModel] = useState({ pcount: 0, pcountSize: 5 })
    const [challenges, setChallenges] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const useHttpMethod = useHttp()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useHttpMethod('/faucet/earn/list-challenges');
                setChallenges(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleClaim = async (claimId) => {
        try {
            // Trigger API for claiming challenge using your custom hook
            await useHttpMethod(`/faucet/earn/claim-challenges?claimId=${claimId}`);
            // You might want to refresh the data after claiming, you can refetch the data here.
            // fetchData();
        } catch (error) {
            console.error('Error claiming challenge:', error);
        }
    };


    const columns = [
        {
            flex: 0.25,
            minWidth: 290,
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
            minWidth: 80,
            type: 'number',
            headerName: 'Total No. of Count',
            renderCell: params => (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.row.count}
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
                    {params.row.reward}
                </Typography>
            )
        },

        // {
        //     flex: 0.2,
        //     minWidth: 140,
        //     field: 'status',
        //     headerName: 'Status',
        //     renderCell: params => {
        //         const status = statusObj[params.row.status]

        //         return <CustomChip rounded size='small' skin='light' color={status.color} label={status.title} />
        //     }
        // },

        {
            flex: 0.125,
            minWidth: 140,
            field: 'actions',
            headerName: 'Actions',
            getActions: params => [
                <Button size='small' variant='outlined' color='secondary' onClick={() => handleClaim(params.row._id)}>
                    Claim
                </Button>,
            ],
        },
    ];

    // useEffect(() => {
    //     setIsLoading(true);
    //     setError(null);

    //     fetch('/faucet/earn/list-challenges')
    //         .then(response => response.json())
    //         .then(data => {
    //             setChallenges(data);
    //         })
    //         .catch(error => {
    //             setError(error);
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         });
    // }, []);

    // const claimChallenge = async (claimId) => {
    //     try {
    //         const response = await fetch(`/faucet/earn/claim-challenges?claimId=${claimId}`);
    //         // Handle the response from the claim API, e.g., update the challenge status
    //     } catch (error) {
    //         console.error('Error claiming challenge:', error);
    //         // Handle the error, e.g., display an error message
    //     }
    // };

    return (
        <Card>
            <CardHeader
                title='Column'

            />
            <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                pcountSizeOptions={[5, 10, 25, 50]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                initialState={{ columns: { columnVisibilityModel: { full_name: hideNameColumn } } }}
            />
        </Card>
    )
}

export default UserChallenges
