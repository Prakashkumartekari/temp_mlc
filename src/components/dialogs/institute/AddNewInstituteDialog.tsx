import React, { useState } from "react";
import CommonDialog from "../CommonDialog";
import {
  Box,
  DialogContent,
  Grid2,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import CustomTextField from "../../theme-component/CustomTextField";
import CustomSelect from "../../theme-component/CustomSelect";
import CustomInputLabel from "../../theme-component/CustomInputLabel";
interface Props {
  open: boolean;
  onClose: () => void;
}
const AddNewInstituteDialog: React.FC<Props> = ({ onClose, open }) => {
  const [state, setState] = useState({
    state: "",
  });
  const hanldleClose = () => {
    onClose();
  };
  return (
    <CommonDialog
      onClose={hanldleClose}
      open={open}
      title="Add New Institute"
      minWidth="800px"
    >
      <DialogContent>
        <Paper sx={{ p: 2 }}>
          <form>
            <Box>
              <CustomInputLabel label="School Name" required />
              <CustomTextField placeholder="Type school name" />
            </Box>
            <Typography variant="body1" mb={1} mt={1.5}>
              Address Detail
            </Typography>
            <Grid2 container spacing={1}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <CustomInputLabel label="State" required />
                <CustomSelect
                  value={state.state}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      state: String(e.target.value),
                    }))
                  }
                >
                  <option value={""}>Select</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Bihar">Bihar</option>
                </CustomSelect>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <CustomInputLabel label="District" required />
                <CustomSelect>
                  <option value="">Select</option>
                  <option value="Ambedkar Nagar">Ambedkar Nagar</option>
                </CustomSelect>
              </Grid2>
            </Grid2>
          </form>
        </Paper>
      </DialogContent>
    </CommonDialog>
  );
};

export default AddNewInstituteDialog;
