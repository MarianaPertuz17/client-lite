import { Product } from '../../interfaces';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';

interface Props {
  items: Product[];
}

export function ItemsTable ({items}: Props) {
  
  const [pageSize, setPageSize] = useState(5);

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