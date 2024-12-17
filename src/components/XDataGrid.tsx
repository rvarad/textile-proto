"use client";

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
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      disableColumnResize
      // autoPageSize
      // pageSizeOptions={[25]}
      checkboxSelection
      disableRowSelectionOnClick
      sx={{
        p: ".5rem",
        background: "rgb(0,0,0)",
        color: "rgb(255,255,255)",
        borderRadius: "1.5rem",
        border: "none",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "& .MuiDataGrid-toolbarContainer .MuiButtonBase-root": {
          color: "rgba(255, 255, 255, 0.69)",
        },
        "& .MuiDataGrid-toolbarContainer .MuiInput-root": {
          color: "rgba(255, 255, 255, 0.69)",
        },
        "& .MuiDataGrid-toolbarContainer .MuiInput-root::before": {
          borderBottom: "1px solid rgba(255, 255, 255, 0.69)",
        },
        "& .MuiDataGrid-columnHeaders > :first-child": {
          background: "rgba(255, 255, 255, 0.6)",
          color: "rgb(255, 255, 255)",
          borderRadius: "1.5rem",
        },
        "& .MuiDataGrid-row--borderBottom .MuiDataGrid-columnHeader": {
          border: "none",
        },
        "& .MuiDataGrid-columnHeaderTitleContainer": {
          whiteSpace: "none",
          overflow: "visible",
        },
        "& .MuiDataGrid-columnHeaderTitleContainerContent": {
          height: "100%",
          overflow: "visible",
        },
        "& .MuiDataGrid-main .MuiDataGrid-checkboxInput": {
          color: "rgb(255, 255, 255)",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          overflow: "visible",
          whiteSpace: "wrap",
          textAlign: "center",
        },
        "& .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row": {
          borderRadius: "1.5rem",
        },
        "& .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row:hover": {
          background: "rgba(255, 255, 255, 0.14)",
        },
        "& .MuiDataGrid-virtualScrollerContent .MuiDataGrid-cell": {
          border: "none",
        },
        "& .MuiDataGrid-root .MuiDataGrid-footerContainer .MuiTablePagination-root":
          {
            color: "rgba(255, 255, 255, 0.69)",
          },
      }}
      columnHeaderHeight={100}
    />
  );
}

export default ComplexDataGrid;
