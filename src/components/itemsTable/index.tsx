import { ItemAttributes } from '../../interfaces';
import styles from './styles.module.css';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';

interface Props {
  companies: ItemAttributes[];
}

export function ItemsTable ({companies}: Props) {
  
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  console.log(companies, 'las que recibo')

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name',  width: 200 },
    { field: 'NIT', headerName: 'NIT', width: 220 },
    { field: 'phone', headerName: 'Phone', width: 220 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'actions', headerName: 'Actions', width: 160 },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={companies}
      getRowId={(row) => row.NIT}
      rowsPerPageOptions={[5, 10, 20]}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      getRowSpacing={(params) => ({
        top: params.isFirstVisible ? 0 : 5,
        bottom: params.isLastVisible ? 0 : 5,
      })}
      sx={{
        [`& .${gridClasses.row}`]: {
          bgcolor: (theme) =>
            theme.palette.mode === 'light' ? grey[200] : grey[900],
        },
      }}
     
    />
  )
}