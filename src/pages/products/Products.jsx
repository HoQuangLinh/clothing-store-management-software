import React, { useEffect, useState } from "react";
import ProductsNavbar from "./products_navbar/ProductsNavbar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import "./products.css";
import Checkbox from "@mui/material/Checkbox";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { styled, Box } from "@mui/system";
import UpdateProduct from "../products/updateProduct/UpdateProduct";
import Dialog from "../../components/dialog/Dialog";
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const columns = [
  { id: "_id", label: "Mã sản phẩm" },
  { id: "name", label: "Tên sản phẩm" },
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

const Products = () => {
  const [products, setProducts] = useState([]);
  const [rerenderProducts, setRerenderProducts] = useState(false);
  const [shirts, setShirts] = useState([]);
  const [trousers, setTrousers] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchText, setSearchText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showFormUpdateProduct, setShowFormUpdateProduct] = useState(false);
  const [showDialogDelete, setShowDialogDelete] = useState(false);
  //get product from API
  useEffect(() => {
    axios
      .get("https://clothesapp123.herokuapp.com/api/products/listProduct")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  }, [showFormUpdateProduct, selectedProduct, rerenderProducts]);

  //get All products
  const getAllProducts = () => {
    axios
      .get("https://clothesapp123.herokuapp.com/api/products/listProduct")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };
  //find product by id or by name
  const searchProduct = () => {
    if (!searchText || !products) {
      getAllProducts();
    }
    const productFilter = products.filter((product) => {
      return (
        product.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        product._id.toLowerCase().indexOf(searchText) > -1
      );
    });
    setProducts(productFilter);
  };

  //filter product by shirts

  useEffect(() => {
    axios
      .get("https://clothesapp123.herokuapp.com/api/products/listCategory", {
        params: {
          name: "Áo",
        },
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data);
        setShirts(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }, []);

  //filter product by trousers

  useEffect(() => {
    axios
      .get("https://clothesapp123.herokuapp.com/api/products/listCategory", {
        params: {
          name: "Quần",
        },
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setTrousers(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }, []);

  //filter products by category
  const handleFilterProductsByCategory = (e) => {
    axios
      .get(
        "https://clothesapp123.herokuapp.com/api/products/productByCategory",
        {
          params: {
            name: e.target.name,
            category: e.target.value,
          },
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setProducts(res.data[0].productList);
      })
      .catch((err) => {
        console.log("lỗi filter");
      });
  };
  const handleCloseDialog = () => {
    setShowDialogDelete(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleDeleteProduct = () => {
    axios
      .delete(
        `https://clothesapp123.herokuapp.com/api/products/deleteOnebyId/${selectedProduct._id}`
      )
      .then((res) => {
        handleCloseDialog();
        alert("Xoá sản phẩm thành công");
        setSelectedProduct(null);
      })
      .catch("Lỗi, xin hãy thử lại sau");
  };
  return (
    <div className="div_product">
      <Dialog
        title="Xoá sản phẩm"
        content={`Bạn có muốn xoá sản phẩm: ${selectedProduct?.name} `}
        open={showDialogDelete}
        handleCancel={handleCloseDialog}
        handleAction={handleDeleteProduct}
      />
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={showFormUpdateProduct}
        onClose={() => {
          setShowFormUpdateProduct(false);
        }}
        BackdropComponent={Backdrop}
      >
        <UpdateProduct
          product={selectedProduct}
          setShowFormUpdateProduct={setShowFormUpdateProduct}
          setProduct={setSelectedProduct}
        />
      </StyledModal>
      <div className="div_left">
        <div className="col-3">
          <div className="clothes-category-card">
            <div className="div_search">
              <div className="header_search">Tìm kiếm</div>
              <div className="search">
                <input
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  type="text"
                  placeholder="Tìm theo mã, tên sản phẩm"
                />

                <i
                  onClick={(e) => {
                    e.preventDefault();
                    searchProduct();
                  }}
                  className="bx bx-search"
                ></i>
              </div>
            </div>
          </div>
          <div className="clothes-category-card">
            <div className="div_search">
              <div className="header_search">Các loại áo</div>
              <select
                name="Áo"
                onChange={handleFilterProductsByCategory}
                onClick={handleFilterProductsByCategory}
                className="selectbox"
              >
                <option value="all">Tất cả</option>
                {shirts.map((shirt, index) => {
                  return (
                    <option key={index} value={shirt.name}>
                      {shirt.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="clothes-category-card">
            <div className="div_search">
              <div className="header_search">Các loại quần</div>
              <select
                name="Quần"
                onChange={handleFilterProductsByCategory}
                onClick={handleFilterProductsByCategory}
                className="selectbox"
              >
                <option value="all">Tất cả</option>
                {trousers.map((trouser, index) => {
                  return (
                    <option key={index} value={trouser.name}>
                      {trouser.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="div_right">
        <div className="col-9" style={{ padding: "10px 0px 10px 10px" }}>
          <Paper sx={{ width: "135%", overflow: "hidden" }}>
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
                    <TableCell
                      padding="checkbox"
                      style={{
                        backgroundColor: "#03a9f4",
                      }}
                    ></TableCell>
                    <TableCell
                      padding="checkbox"
                      style={{
                        backgroundColor: "#03a9f4",
                      }}
                    ></TableCell>
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
                            let value = row[column.id];
                            if (column.id === "_id") {
                              value = value.substr(value.length - 7);
                            }
                            if (column.id === "countInStock") {
                              var total = 0;
                              row.options.forEach((value) => {
                                total += value.quantity;
                              });
                              value = total;
                            }
                            return (
                              <TableCell key={column.id}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                          <TableCell
                            onClick={() => {
                              console.log("update");
                              setSelectedProduct(row);
                              console.log(row);
                              setShowFormUpdateProduct(true);
                            }}
                            padding="checkbox"
                          >
                            <i
                              style={{ fontSize: 18 }}
                              class="bx bx-edit-alt"
                            ></i>
                          </TableCell>
                          <TableCell
                            onClick={() => {
                              console.log("delete");
                              console.log(row);
                              setSelectedProduct(row);
                              setShowDialogDelete(true);
                            }}
                            padding="checkbox"
                          >
                            <i style={{ fontSize: 18 }} class="bx bx-trash"></i>
                          </TableCell>
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
        <ProductsNavbar setRerenderProducts={setRerenderProducts} />
      </div>
    </div>
  );
};

export default Products;
