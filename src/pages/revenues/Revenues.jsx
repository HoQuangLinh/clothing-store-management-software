import React, { useEffect, useState } from "react";
import BarChart from "./BarChart/BarChart";
import "./revenues.css";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import axios from "axios";
import TableReport from "./TableReport/TableReport";
const dateNow = new Date();
const listClothes = [];
const listDay = [];
const dataRevenue = {
  labels: listDay,
  datasets: [
    {
      data: [],
      backgroundColor: "#62B4FF",
      borderColor: "#62B4FF",
      borderWidth: 1,
    },
  ],
};
// Set Default revenues this month
const one_day = 1000 * 60 * 60 * 24;

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
for (var i = 0; i < 10; i++) {
  listClothes[i] = "Áo thun tay lỡ";
}
const dataClothes = {
  labels: listClothes,
  datasets: [
    {
      data: [124, 193, 35, 54, 24, 35, 56, 66, 76, 86],
      backgroundColor: "#62B4FF",
      borderColor: "#62B4FF",
      borderWidth: 1,
    },
  ],
};

const saleProductColumns = [
  "Mã sản phẩm",
  "Sản phẩm",
  "Số lượng đã bán",
  "Doanh thu",
  "Lợi nhuận",
];
const returnProductColumm = ["Mã sản phẩm", "Tên sản phẩm", "Số lương đổi trả"];
const ordersTodayRows = [];
for (var i = 0; i < 3; i++) {
  ordersTodayRows[i] = {
    _id: "ABCDE",
    productName: "Sản phẩm",
    sellQuantity: 0,
    revenue: 0,
    profit: 0,
  };
}

const Revenues = () => {
  const [displayTypeSelect, setDisplayTypeSelect] = useState("chart");
  const [displayTypeSelect2, setDisplayTypeSelect2] = useState("month");
  const [reportFilter, setReportFilter] = useState("product");
  const [Orders, setOrders] = useState([]);
  const [titleChar, setTitleChar] = useState("Doanh thu tháng này");
  const [DataRevenue, setDataRevenue] = useState(dataRevenue);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reportProduct, setReportProduct] = useState(ordersTodayRows);
  const [columnReport, setColumnReport] = useState(saleProductColumns);
  console.log(displayTypeSelect);

  function resetDataRevenuebyMonth(month, year) {
    listDay.length = 0;
    dataRevenue.datasets[0].data.length = 0;
    for (var i = 0; i < daysInMonth(month, year); i++) {
      listDay[i] = i + 1;
      dataRevenue.datasets[0].data[i] = 0;
      if (dateNow.getDate() == i + 1) listDay[i] = "Hôm nay";
    }
    dataRevenue.labels = listDay;
    setDataRevenue(dataRevenue);
  }
  function setDataCurrentYear() {
    console.log("Chạy set data current year");
    listDay.length = 0;
    dataRevenue.datasets[0].data.length = 0;
    for (var i = 0; i < 12; i++) {
      listDay[i] = i + 1;
      dataRevenue.datasets[0].data[i] = 0;
    }
    Orders.forEach((item) => {
      const dateOrder = new Date(item.dateOrder);
      var i = dateOrder.getMonth();
      const revenue = item.orderTotal - item.totalReturnPrice;
      if (revenue > 0) dataRevenue.datasets[0].data[i] += revenue;
      console.log(dataRevenue.datasets[0].data[i]);
    });
    setDataRevenue((DataRevenue) => ({
      ...DataRevenue,
      dataRevenue,
    }));
  }
  function setDataRevenueByMonthYear(orders, month, year) {
    console.log("Chạy by month year");
    console.log(month + "/" + year);
    resetDataRevenuebyMonth(month, year);
    orders.forEach((item) => {
      const dateOrder = new Date(item.dateOrder);
      console.log("Vòng");
      if (
        month == dateOrder.getMonth() + 1 &&
        year == dateOrder.getFullYear()
      ) {
        console.log(
          "ID order:" +
            item._id +
            "  " +
            dateOrder +
            " Data:" +
            dataRevenue.labels[dateOrder.getDate() - 1] +
            "Revenue: " +
            dataRevenue.datasets[0].data[dateOrder.getDate() - 1]
        );
        const revenue = item.orderTotal - item.totalReturnPrice;
        if (revenue > 0)
          dataRevenue.datasets[0].data[dateOrder.getDate() - 1] += revenue;
      }
    });
    // setDataRevenue(dataRevenue);
    setDataRevenue((DataRevenue) => ({
      ...DataRevenue,
      dataRevenue,
    }));
    console.log(DataRevenue);
  }
  function handleFilter() {
    if (toDate == "" || fromDate == "") return;
    setDateRevenuebyDate(Orders, fromDate, toDate);
  }
  function setDateRevenuebyDate(orders, dateFrom, dateTo) {
    console.log("Chạy setData by date");
    listDay.length = 0;
    dataRevenue.datasets[0].data.length = 0;
    var numberOfDays = (
      Math.round(dateTo.getTime() - dateFrom.getTime()) / one_day
    ).toFixed(0);
    var dateCount = new Date(dateFrom);
    for (var i = 0; i <= numberOfDays; i++) {
      console.log(i);
      listDay[i] = dateCount.getDate() + "/" + String(dateCount.getMonth() + 1);
      if (
        dateCount.getDate() == dateNow.getDate() &&
        dateCount.getMonth() == dateNow.getMonth() &&
        dateCount.getFullYear() == dateNow.getFullYear()
      )
        listDay[i] = "Hôm nay";
      console.log(listDay[i]);
      dataRevenue.datasets[0].data[i] = 0;
      Orders.forEach((item) => {
        console.log("Vòng");
        const dateOrder = new Date(item.dateOrder);
        if (
          dateCount.getMonth() == dateOrder.getMonth() &&
          dateCount.getFullYear() == dateOrder.getFullYear() &&
          dateCount.getDate() == dateOrder.getDate()
        ) {
          const revenue = item.orderTotal - item.totalReturnPrice;
          if (revenue > 0) dataRevenue.datasets[0].data[i] += revenue;
          console.log(dataRevenue.datasets[0].data[i]);
        }
      });
      dateCount.setDate(dateCount.getDate() + 1);
    }
    console.log(dataRevenue);
    dataRevenue.labels = listDay;
    setDataRevenue((DataRevenue) => ({
      ...DataRevenue,
      dataRevenue,
    }));
  }
  useEffect(async () => {
    console.log("Chạy USe effect");
    console.log(DataRevenue);
    await axios
      .get("https://clothingshopapp.herokuapp.com/api/orders/list")
      .then(async (res) => {
        setOrders(res.data);
        setDataRevenueByMonthYear(
          res.data,
          dateNow.getMonth() + 1,
          dateNow.getFullYear()
        );
      })
      .catch((err) => {
        console.log(err.res);
      });
    SellProductReport();
  }, []);

  async function ReturnReport() {
    await axios
      .get("https://clothingshopapp.herokuapp.com/api/products/return")
      .then(async (res) => {
        setReportProduct(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  async function SellProductReport() {
    await axios
      .get("https://clothingshopapp.herokuapp.com/api/products/sell")
      .then(async (res) => {
        setReportProduct(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  }

  //Render
  return (
    <div className="revenues-container">
      <div className="row">
        <div className="col-3">
          <div className="revuenues-filter">
            <h2 className="revenues-title">Báo cáo bán hàng</h2>
            <div className="revenues-card">
              <h3 className="revenues-card-title">Kiểu hiển thị</h3>
              <div className="revenues-card-row">
                <input
                  checked={displayTypeSelect === "chart"}
                  type="radio"
                  name="display"
                  value="chart"
                  onChange={(e) => {
                    console.log("chart test");
                    setDisplayTypeSelect(e.target.value);
                  }}
                />
                <span>Biểu đồ doanh thu</span>
              </div>
              <div className="revenues-card-row">
                <input
                  checked={displayTypeSelect === "report"}
                  type="radio"
                  name="display"
                  id=""
                  value="report"
                  onChange={(e) => {
                    console.log("report test");
                    setDisplayTypeSelect(e.target.value);
                  }}
                />
                <span>Báo cáo số liệu</span>
              </div>
            </div>
            {displayTypeSelect === "report" ? (
              <div className="revenues-card">
                <h3 className="revenues-card-title">Loại báo cáo</h3>
                <div className="revenues-card-row">
                  <input
                    checked={reportFilter === "product"}
                    type="radio"
                    name=""
                    id=""
                    onClick={() => {
                      setReportFilter("product");
                      setColumnReport(saleProductColumns);
                      SellProductReport();
                    }}
                  />
                  <span>Hàng hóa</span>
                </div>
                <div className="revenues-card-row">
                  <input
                    checked={reportFilter === "return"}
                    type="radio"
                    name=""
                    id=""
                    onClick={() => {
                      setReportFilter("return");
                      setColumnReport(returnProductColumm);
                      ReturnReport();
                    }}
                  />
                  <span>Trả hàng</span>
                </div>
              </div>
            ) : null}
            {displayTypeSelect === "report" ? null : (
              <div className="revenues-card">
                <h3 className="revenues-card-title">Thời gian</h3>
                <div className="revenues-card-row">
                  <input
                    checked={displayTypeSelect2 === "year"}
                    type="radio"
                    name="year"
                    id=""
                    onChange={(e) => {
                      setTitleChar("Doanh thu tháng này");
                      setDataCurrentYear();
                      setDisplayTypeSelect2("year");
                    }}
                  />
                  <span>Năm nay</span>
                </div>
                <div className="revenues-card-row">
                  <input
                    checked={displayTypeSelect2 === "month"}
                    type="radio"
                    name="month"
                    id=""
                    onChange={(e) => {
                      setTitleChar("Doanh thu tháng này");
                      setDataRevenueByMonthYear(
                        Orders,
                        dateNow.getMonth() + 1,
                        dateNow.getFullYear()
                      );
                      setDisplayTypeSelect2("month");
                    }}
                  />
                  <span>Tháng này</span>
                </div>
                <div className="revenues-card-row">
                  <input
                    checked={displayTypeSelect2 === "last7days"}
                    type="radio"
                    name="last7days"
                    id=""
                    onChange={(e) => {
                      setDisplayTypeSelect2("last7days");
                      setTitleChar("Doanh thu 7 ngày gần nhất");
                      var today = new Date();
                      var lastWeek = new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate() - 6
                      );
                      setDateRevenuebyDate(Orders, lastWeek, dateNow); //nó á Linh
                    }}
                  />
                  <span>7 ngày gần nhất</span>
                </div>
                <div className="revenues-card-row">
                  <input
                    checked={displayTypeSelect2 === "options"}
                    type="radio"
                    name="options"
                    id=""
                    onChange={(e) => {
                      setDisplayTypeSelect2("options");
                    }}
                  />
                  <span>Tùy chỉnh</span>
                </div>
                <div className="revenues-card-row">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      inputFormat="dd/MM/yyyy"
                      views={["day", "month", "year"]}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      label={fromDate ? "" : "Từ ngày.."}
                      value={fromDate}
                      onChange={(newValue) => {
                        setFromDate(newValue);
                        setDisplayTypeSelect2("options");
                      }}
                      renderInput={(params) => (
                        <TextField
                          InputLabelProps={{
                            shrink: false,
                          }}
                          {...params}
                          variant="standard"
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="revenues-card-row">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      minDate={fromDate}
                      inputFormat="dd/MM/yyyy"
                      views={["day", "month", "year"]}
                      label={toDate ? "" : "Đến ngày..."}
                      value={toDate}
                      onChange={(newValue) => {
                        setToDate(newValue);
                        setDisplayTypeSelect2("options");
                      }}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      renderInput={(params) => (
                        <TextField
                          InputLabelProps={{
                            shrink: false,
                          }}
                          {...params}
                          variant="standard"
                          size="small"
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="revenues-card-row submit">
                  <button
                    onClick={() => {
                      if (fromDate == "" || toDate == "") {
                        alert("Bạn cần chọn đủ cả 2 ngày");
                        return;
                      }
                      var title =
                        "Doanh thu từ " +
                        fromDate.getDate() +
                        "/" +
                        String(fromDate.getMonth() + 1) +
                        "/" +
                        fromDate.getFullYear() +
                        "  -  " +
                        fromDate.getDate() +
                        "/" +
                        String(fromDate.getMonth() + 1) +
                        "/" +
                        fromDate.getFullYear();
                      console.log(title);
                      setTitleChar(title);
                      handleFilter();
                    }}
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-9">
          {displayTypeSelect === "chart" && (
            <div className="bar-chart-display">
              <BarChart title={titleChar} data={DataRevenue} />
              <BarChart
                title="Top 10 sản phẩm bán chạy theo số lượng (Trừ trả hàng)"
                data={dataClothes}
                horizontal
              />
            </div>
          )}
          {displayTypeSelect === "report" && (
            <div className="report-display">
              <TableReport
                columns={columnReport}
                rows={reportProduct}
                ReportFilter={reportFilter}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Revenues;
