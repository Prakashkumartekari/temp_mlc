import { useMemo, useState } from "react";
import { type MRT_ColumnDef } from "material-react-table";
interface Person {
  name: string;
  age: number;
}

export const useInstitute = () => {
  const [state, setState] = useState({
    addNewInstituteDialog: false,
  });
  const handleCloseAddNewInstituteDialog = () => {
    setState((prev) => ({ ...prev, addNewInstituteDialog: false }));
  };
  const tableData: Person[] = [
    {
      name: "Prakash",
      age: 20,
    },
    {
      name: "Prakash",
      age: 20,
    },
    {
      name: "Prakash",
      age: 20,
    },
    {
      name: "Prakash",
      age: 20,
    },
    {
      name: "Prakash",
      age: 20,
    },
    {
      name: "Prakash",
      age: 20,
    },
    {
      name: "Prakash",
      age: 20,
    },
    {
      name: "Prakash",
      age: 20,
    },
  ];
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
    ],
    []
  );
  return {
    state,
    columns,
    tableData,
    setState,
    handleCloseAddNewInstituteDialog,
  };
};
