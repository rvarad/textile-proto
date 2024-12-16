"use client"

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function ComplexDataGrid({ columns, rows }: { columns: any; rows: any }) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      slots={{toolbar: GridToolbar}}
      slotProps={{
        toolbar: {
          showQuickFilter: true
        }
      }}
      disableColumnResize
			// autoPageSize
      // pageSizeOptions={[25]}
      checkboxSelection
      disableRowSelectionOnClick
      sx={{
        p: '.5rem',
        background: 'rgb(0,0,0)' ,
        color: 'rgb(255,255,255)',
        borderRadius: '1.5rem',
        border: 'none',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        '& .MuiDataGrid-container--top': {
          background: 'rgb(0,0,0)',
        },
        '& .MuiDataGrid-columnHeaderTitleContainer': {
          whiteSpace: 'none',
          overflow: 'visible'
        },
        '& .MuiDataGrid-columnHeaderTitleContainerContent': {
          height: '100%',
          overflow: 'visible'
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          overflow: 'visible',
          whiteSpace: 'wrap',
          textAlign: 'center'
        }
      }}
      columnHeaderHeight={100}
    />
  );
}

export default ComplexDataGrid
