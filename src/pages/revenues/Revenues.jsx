import React, { useState } from "react";
import BarChart from "./BarChart/BarChart";
import "./revenues.css";
import TableReport from "./TableReport/TableReport";
const listClothes = [];
const listMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
const dataRevenueByMonth = {
  labels: listMonth,
  datasets: [
    {
      data: [124, 100, 200, 193, 35, 54, 24, 35, 56, 66, 76, 86],
      backgroundColor: "#62B4FF",
      borderColor: "#62B4FF",
      borderWidth: 1,
    },
  ],
};
const ordersTodayColumns = [
  "Mã đơn hàng",
  "Thời gian",
  "Khách hàng",
  "Tổng tiền bán",
  "Lợi nhuận",
];
function createData(orderId, dateTime, customer, totalPrice, profit) {
  return { orderId, dateTime, customer, totalPrice, profit };
}
const ordersTodayRows = [];
for (var i = 0; i < 120; i++) {
  ordersTodayRows[i] = createData(
    i,
    "25/10/2021",
    "Lê Văn Đỗ",
    Math.round(Math.random() * 1000),
    "200,000"
  );
}
const Revenues = () => {
  const [displayTypeSelect, setDisplayTypeSelect] = useState("chart");
  console.log(displayTypeSelect);
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
                <span>Biểu đồ</span>
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
                <span>Báo cáo</span>
              </div>
            </div>
            <div className="revenues-card">
              <h3 className="revenues-card-title">Thời gian</h3>
              <div className="revenues-card-row">
                <input type="radio" name="month" id="" />
                <span>Tháng này</span>
              </div>
              <div className="revenues-card-row">
                <input type="radio" name="month" id="" />
                <span>Lựa chọn khác</span>
              </div>
            </div>
            <div className="revenues-card">
              <h3 className="revenues-card-title">Loại báo cáo</h3>
              <div className="revenues-card-row">
                <input type="checkbox" name="" id="" />
                <span>Bán hàng</span>
              </div>
              <div className="revenues-card-row">
                <input type="checkbox" name="" id="" />
                <span>Hàng hoá</span>
              </div>
              <div className="revenues-card-row">
                <input type="checkbox" name="" id="" />
                <span>Trả hàng</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          {displayTypeSelect === "chart" && (
            <div className="bar-chart-display">
              <BarChart title="Doanh thu tháng này" data={dataRevenueByMonth} />
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
                columns={ordersTodayColumns}
                rows={ordersTodayRows}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Revenues;
