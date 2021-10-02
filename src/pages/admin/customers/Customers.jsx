import React from "react";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createTheme";
const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          padding: "5px 10px",
        },
      },
    },
  });
const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      customBodyRender: () => (
        <div style={{ height: 70 }}>
          <img
            alt="123"
            src="https://res.cloudinary.com/hoquanglinh/image/upload/v1625711494/Linh/ubwbllotj0ax5ms8u8mj.png"
            style={{ height: "100%" }}
          />
        </div>
      ),
    },
  },
];
const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX11"],
];

const Customers = () => {
  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={{ selectableRows: false }}
      />
    </MuiThemeProvider>
  );
};

export default Customers;
