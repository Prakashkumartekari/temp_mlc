import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogTitle,
  Divider,
  Grow,
  Stack,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { PropsWithChildren } from "react";
interface Props {
  open: boolean;
  onClose: () => void;
  minWidth?: string;
  title: string;
  children: React.ReactNode;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} />;
});
const CommonDialog: React.FC<Props> = ({
  open = false,
  onClose = () => {},
  minWidth = "400px",
  title = "Title",
  children,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { minWidth: { xs: "98%", md: minWidth }, background: "#f7f7f7" },
      }}
      TransitionComponent={Transition}
    >
      <DialogTitle sx={{ p: "0 !important", mb: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            py: 1,
            px: 2,
            background: "#fff",
            borderBottom: "1px solid #919eab1f",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            {title}
          </Typography>
          <Box
            onClick={onClose}
            sx={{
              cursor: "pointer",
              height: "25px",
              width: "25px",
              border: "2px solid #919eabac",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Close sx={{ color: "#919eab" }} />
          </Box>
        </Stack>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export default CommonDialog;
