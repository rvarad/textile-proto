import ComplexDataGrid from "@/components/XDataGrid";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { yarncounts } from "../../../../yarncounts";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "material",
    headerName: "Material",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "countname",
    headerName: "Count Name",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  // {field: "cone", headerName: "Cone", width: 100},
  // {field: "bundle", headerName: "Bundle", width: 100},
  {
    field: "warpandweftwidthshrinkage",
    headerName: "Warp And Weft Width Shrinkage%",
    width: 185,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "warplengthshrinkage",
    headerName: "Warp Length Shrinkage%",
    width: 185,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "weftlengthshrinkage",
    headerName: "Weft Length Shrinkage%",
    width: 185,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "runningmeter",
    headerName: "Running Meter",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "knots",
    headerName: "Knots",
    width: 110,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "hanks",
    headerName: "Hanks",
    width: 110,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "wthanks",
    headerName: "WT Hanks",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "wthanksnotrounded",
    headerName: "WT Hanks Not Rounded",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
];

const rows = yarncounts;

function Page() {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Link href={"/yarncounts/add-new-cost"}>
          <Button size="large" color="primary" variant="contained">
            Add New Cost
          </Button>
        </Link>
        <Button size="small" color="warning" variant="outlined">
          Reset Yarn count
        </Button>
      </Stack>
      <Box sx={{ mt: "1.5rem", width: "100%" }}>
        <Typography variant="h4" sx={{mb: "1rem"}} >Yarn Count List</Typography>
        <ComplexDataGrid rows={rows} columns={columns} />
      </Box>
    </Container>
  );
}

export default Page;
