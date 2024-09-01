import { Typography, TypographyProps } from "@mui/material";
import React from "react";
interface Props extends TypographyProps {
  label: string;
  required?: boolean;
}
const CustomInputLabel: React.FC<Props> = ({ label, required, ...props }) => {
  return (
    <Typography variant="body1" {...props}>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </Typography>
  );
};

export default CustomInputLabel;
