import React from "react";
import CommonTable from "../../components/tables/CommonTable";
import { Button, Container, Stack } from "@mui/material";
import { useInstitute } from "../../hooks/useInstitute";
import AddNewInstituteDialog from "../../components/dialogs/institute/AddNewInstituteDialog";

const Intstitute = () => {
  const {
    tableData,
    columns,
    state,
    handleCloseAddNewInstituteDialog,
    setState,
  } = useInstitute();
  return (
    <>
      <AddNewInstituteDialog
        onClose={handleCloseAddNewInstituteDialog}
        open={state.addNewInstituteDialog}
      />
      <Container maxWidth="xl">
        <Stack direction={"row"} justifyContent={"flex-end"} mb={1}>
          <Stack direction={"row"} gap={2}>
            <Button
              variant="contained"
              size="small"
              sx={{ width: "140px  " }}
              onClick={() =>
                setState((prev) => ({ ...prev, addNewInstituteDialog: true }))
              }
            >
              + Add New
            </Button>
          </Stack>
        </Stack>
        <CommonTable columns={columns} data={tableData} />
      </Container>
    </>
  );
};

export default Intstitute;
