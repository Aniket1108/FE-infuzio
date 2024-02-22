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



const ListShortlinks = () => {
  // ** States
  const [hideNameColumn, setHideNameColumn] = useState(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5, })
  const [shortLinksList, setShortLinksList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarValues, setSnackbarValues] = useState({
    message: '',
    severity: 'warning',
  });

  const useHttpMethod = useHttp()


  useEffect(() => {

    useHttpMethod.get('/faucet/earn/list-shortlinks').then(res => {
      if (res.statusCode !== 200) {
        setSnackbarValues({ message: response.message, severity: 'error' });
        setOpenSnackbar(true);
      }
      setShortLinksList(res.payload)

    })

  }, []);

  const generateShortlink = async (e, shortlinkId) => {
    try {
      e.preventDefault()
      const response = await useHttpMethod.get(`/faucet/earn/generate-shortlink?shortlinkId=${shortlinkId}`);
      if (response.statusCode !== 200) {
        setSnackbarValues({ message: res.message, severity: 'error' });
        setOpenSnackbar(true);
      } else {
        window.open(response.payload.shortlink, '_blank');


        // setSnackbarValues({ message: response.message, severity: 'success' });
        // setOpenSnackbar(true);
        useHttpMethod.get('/faucet/earn/list-shortlinks').then(res => {
          setShortLinksList(res.payload);
        });
      }
    } catch (error) {

      setSnackbarValues({ message: response.message, severity: 'error' });
      setOpenSnackbar(true);
    }
  };



  const columns = [

    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'Name of ShortLink',
      field: 'name',
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.name}
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
      align: 'center',
      headerAlign: 'center',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.reward} $
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'count',
      minWidth: 180,
      type: 'number',
      headerName: 'Completed',
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.claimedCount > params.row.count ? params.row.count : params.row.claimedCount} / {params.row.count}
        </Typography>
      )
    },


    {
      flex: 0.125,
      minWidth: 130,
      field: 'actions',
      headerName: 'Claim',
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      renderCell: params => [
        <Button key={params.row._id} size='small' variant='outlined' color='secondary' onClick={(e) => generateShortlink(e, params.row._id)}>
          Claim
        </Button>,
      ],
    },
  ];

  const rows = shortLinksList?.map((item, index) => {
    return {
      _id: item._id,
      name: item.name,
      count: item.view_per_day,
      isCompleted: item.isCompleted,
      reward: item.reward,
      claimedCount: item.clamed
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
        <CardHeader sx={{
          textAlign: 'center', '& .MuiCardHeader-subheader': {
            color: 'red',
          }, '& .MuiCardHeader-title': {
            typography: 'h4',
          },
        }}
          title='Shortlinks List' subheader="Using bypass tools is forbidden and may lead to your account being banned!" />
        {shortLinksList.length > 0 && (
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
            // initialState={{ columns: { columnVisibilityModel: { name: hideNameColumn } } }}
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

export default ListShortlinks
