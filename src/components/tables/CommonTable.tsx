import {
  MaterialReactTable,
  MaterialReactTableProps,
} from "material-react-table";
import { useMediaQuery } from "@mui/material";

// Define CommonTableProps as a type
type CommonTableProps<TData extends Record<string, any>> =
  MaterialReactTableProps<TData> & {
    columns: MaterialReactTableProps<TData>["columns"];
    data: TData[];
    maxHeight?: string;
  };

const CommonTable = <TData extends Record<string, any>>({
  columns,
  data,
  maxHeight = "65vh",
  ...props
}: CommonTableProps<TData>) => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <MaterialReactTable<TData>
      columns={columns}
      data={data}
      enableStickyHeader={true}
      enablePagination={false}
      enableTopToolbar={true}
      enableBottomToolbar={false}
      muiTableProps={{
        sx: {
          tableLayout: isMobile ? "auto" : "fixed",
        },
      }}
      muiTablePaperProps={{
        sx: {
          boxShadow: 0,

          borderRadius: "10px",
        },
      }}
      muiTopToolbarProps={{
        sx: {
          borderRadius: "10px 10px 0 0",
        },
      }}
      muiTableContainerProps={{
        sx: {
          maxHeight: maxHeight,
          overflowY: "auto",
          borderRadius: "0 0 10px 10px",
          "&::-webkit-scrollbar": {
            width: 10,
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            border: "1px solid var(--primary-main)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--primary-main)",
            borderRadius: "10px",
          },
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          fontSize: isMobile ? ".9rem" : "12px",
          color: "var(--primary-main)",
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          fontWeight: "normal",
          fontSize: isMobile ? "1rem" : "14px",
          color: "var(--primary-main)",
          textAlign: "center",
          marginX: "auto",
          marginY: "auto",
        },
      }}
      muiTableHeadRowProps={{
        sx: {
          height: "50px",
          width: "100%",
        },
      }}
      enableColumnFilters
      muiTableBodyProps={{
        sx: {
          fontSize: "14px",
        },
      }}
      {...props}
    />
  );
};

export default CommonTable;
