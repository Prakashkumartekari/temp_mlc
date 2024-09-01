import { Box, Stack, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TableActionButtons = ({
  showEdit = false,
  showView = false,
  showDelete = false,
  showPrint = false,
  handleEdit = () => {},
  handleView = () => {},
  handleDelete = () => {},
  handlePrint = () => {},
  isPrintLink = false,
  printTarget = "_blank",
}) => {
  return (
    <StyledWrapper direction="row" gap={0.8}>
      {showEdit && (
        <Box onClick={handleEdit} sx={{ cursor: "pointer" }}>
          <img alt="edit" src="/edit-icon.png" className="action_icon" />
        </Box>
      )}
      {showView && (
        <Box onClick={handleView} sx={{ cursor: "pointer" }}>
          <img alt="edit" src="/view-icon.png" className="action_icon" />
        </Box>
      )}
      {showDelete && (
        <Box onClick={handleDelete} sx={{ cursor: "pointer" }}>
          <img alt="edit" src="/delete-icon.png" className="action_icon" />
        </Box>
      )}
      {showPrint && (
        <>
          {isPrintLink ? (
            <Link
              to={isPrintLink}
              target={printTarget}
              rel="noopener noreferrer"
            >
              <img alt="edit" src="/print-icon.png" className="action_icon" />
            </Link>
          ) : (
            <Box onClick={handlePrint} sx={{ cursor: "pointer" }}>
              <img alt="edit" src="/print-icon.png" className="action_icon" />
            </Box>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

export default TableActionButtons;
const StyledWrapper = styled(Stack)`
  .action_icon {
    height: 28px;
    width: 28px;
    object-fit: contain;
  }
`;
