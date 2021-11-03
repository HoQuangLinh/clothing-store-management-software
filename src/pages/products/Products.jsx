import React from "react";
import ProductsNavbar from "./products_navbar/ProductsNavbar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import "./products.css";
import Checkbox from "@mui/material/Checkbox";

const columns = [
  { id: "productId", label: "Mã sản phẩm" },
  { id: "productName", label: "Tên sản phẩm" },
  {
    id: "costPrice",
    label: "Giá vốn",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "salePrice",
    label: "Giá bán",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "countInStock",
    label: "Tồn kho",

    format: (value) => value.toLocaleString("en-US"),
  },
];

const products = [
  {
    id: 1,
    productId: "1",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 2,
    productId: "2",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 3,
    productId: "3",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 1,
    productId: "1",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 2,
    productId: "2",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 3,
    productId: "3",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 1,
    productId: "1",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 2,
    productId: "2",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 3,
    productId: "3",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 1,
    productId: "1",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 2,
    productId: "2",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
  {
    id: 3,
    productId: "31",
    productName: "Áo khoác cực đẹp",
    costPrice: 10000,
    salePrice: 20000,
    countInStock: 100,
  },
];

const categoryShirt = ["Áo khoác", "Áo sơ mi", "Áo thun", "Áo tay lỡ"];
const categoryPants = [
  "Quần short",
  "Quần thun dài",
  "Quần tây âu",
  "Quần jean",
  "Quần short",
  "Quần thun dài",
  "Quần tây âu",
  "Quần jean",
  "Quần short",
  "Quần thun dài",
  "Quần tây âu",
  "Quần jean",
  "Quần short",
  "Quần thun dài",
  "Quần tây âu",
  "Quần jean",
];

const Products = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <ProductsNavbar />
      <div className="row products_content">
        <div className="col-3">
          <div className="clothes-category-card">
            <div className="clothes-category-card-heading">
              <h3>Áo</h3>
            </div>
            <ul className="clothes-category-card-list">
              {categoryShirt.map((value) => {
                return <li>{value}</li>;
              })}
            </ul>
          </div>
          <div className="clothes-category-card">
            <div className="clothes-category-card-heading">
              <h3>Quần</h3>
            </div>
            <ul className="clothes-category-card-list">
              {categoryPants.map((value) => {
                return <li>{value}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="col-9" style={{ padding: "10px 0px 10px 10px" }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      padding="checkbox"
                      style={{
                        backgroundColor: "#03a9f4",
                      }}
                    >
                      <Checkbox
                        color="primary"
                        inputProps={{
                          "aria-label": "select all desserts",
                        }}
                      />
                    </TableCell>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#03a9f4",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          key={row.code}
                          style={
                            index % 2 == 1 ? { backgroundColor: "#e8e8e8" } : {}
                          }
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "select all desserts",
                              }}
                            />
                          </TableCell>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[6, 12, 100]}
              component="div"
              count={products.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Số hàng hiển thị"
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Products;
