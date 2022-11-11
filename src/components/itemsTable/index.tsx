import { Product } from '../../interfaces';
import styles from './styles.module.css';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';

interface Props {
  items: Product[];
}

export function ItemsTable ({items}: Props) {
  
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  console.log(items, 'las que recibo')

  const columns: GridColDef[] = [
    { field: 'productName', headerName: 'Name',  width: 500 },
    { field: 'quantity', headerName: 'Quantity', width: 500 },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={items}
      getRowId={(row) => row.id}
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