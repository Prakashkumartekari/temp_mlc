import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// You can create a styled version of the TextField component
const CustomStyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "inherit", // Darker on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "inherit", // Lighter on focus
    },
  },
  "& .MuiInputLabel-root": {
    color: "#637381",
    fontSize: "14px", // Custom font size
    "&.Mui-focused": {
      color: "inherit",
      fontSize: "14px",
    },
  },
}));

// Custom TextField component with additional props
const CustomTextField: React.FC<TextFieldProps> = (props) => {
  return (
    <CustomStyledTextField
      fullWidth
      size="small"
      // Set default variant
      {...props} // Spread the rest of the props to allow customization
    />
  );
};

export default CustomTextField;
