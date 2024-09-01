import React from "react";
import { Select, SelectProps, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled version of the Select component
const CustomStyledSelect = styled(Select)(({ theme }) => ({}));

// Custom Select component with additional props
const CustomSelect: React.FC<SelectProps> = (props) => {
  return (
    <CustomStyledSelect size="small" fullWidth {...props} native displayEmpty>
      {props.children}
    </CustomStyledSelect>
  );
};

export default CustomSelect;
