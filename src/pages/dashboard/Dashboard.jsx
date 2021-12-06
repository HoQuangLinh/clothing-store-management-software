import React from "react";
import "./dashboard.css";
import revenueIcon from "../../assets/images/dashboardIcon1.png";
import dashboardOrderIcon from "../../assets/images/dashboardOrderIcon1.png";
import dashboardCostIcon from "../../assets/images/dashboardCost.png";
import marginIcon from "../../assets/images/dashboardRevenueIcon.png";
import BarChart from "../../components/barchart/BarChart";
const Dashboard = () => {
  const listClothes = [];
  const clothes = [0, 1, 2, 3, 4];
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
  return (
    <div>
      <div className="dashboard-overview">
        <div className="dashboard-overview-row row">
          <div className="col-6">
            <div
              style={{ background: "#3B76EF" }}
              className="dashboard-overview-card"
            >
              <div className="dashboard-overview-card-content">
                <div className="dashboard-overview-card-heading">
                  <h3>Tổng doanh thu</h3>
                </div>
                <div className="dashboard-overview-card-body">
                  <h3>10,000,000 đồng</h3>
                </div>
              </div>
              <div className="dashboard-overview-card-img">
                <img src={revenueIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              style={{ background: "#63C7FF" }}
              className="dashboard-overview-card "
            >
              <div className="dashboard-overview-card-content">
                <div className="dashboard-overview-card-heading">
                  <h3>Tổng chi phí</h3>
                </div>
                <div className="dashboard-overview-card-body">
                  <h3>10,000,000 đồng</h3>
                </div>
              </div>
              <div className="dashboard-overview-card-img">
                <img src={dashboardCostIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-overview-row row">
          <div className="col-6">
            <div
              style={{ background: "#A66DD4" }}
              className="dashboard-overview-card "
            >
              <div className="dashboard-overview-card-content">
                <div className="dash-board-overview-card-content">
                  <div className="dashboard-overview-card-heading">
                    <h3>Tổng đơn hàng</h3>
                  </div>
                  <div className="dashboard-overview-card-body">
                    <h3>100 đơn hàng</h3>
                  </div>
                </div>
              </div>
              <div className="dashboard-overview-card-img">
                <img src={dashboardOrderIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              style={{ background: "#00A856" }}
              className="dashboard-overview-card "
            >
              <div className="dash-board-overview-card-content">
                <div className="dashboard-overview-card-heading">
                  <h3>Lợi nhuận</h3>
                </div>
                <div className="dashboard-overview-card-body">
                  <h3>10,000,000 đồng</h3>
                </div>
              </div>
              <div className="dashboard-overview-card-img">
                <img src={marginIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**end dashboard overview */}
      {/**table dashboard */}
      <div className="table-dashboard-container">
        <div class="card">
          <div class="card-header">
            <h3>Top 5 sản phẩm có doanh thu cao nhất trong ngày</h3>
          </div>
          <div class="card-content">
            <table id="dashboard-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá bán</th>
                  <th>Số lượng bán</th>
                  <th>Lợi nhuận</th>
                </tr>
              </thead>
              <tbody>
                {clothes.map((value) => {
                  return (
                    <tr>
                      <td>{value}</td>
                      <td>122212cdsd</td>
                      <td>Bộ áo khoác dành cho người lơn, chất cotton</td>
                      <td>2,000,000đ</td>
                      <td>20</td>
                      <td>10,000,000đ</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/**end table dashboard */}
      <div className="dashboard-chart">
        <BarChart
          title="Top 10 sản phẩm bán chạy theo số lượng "
          data={dataClothes}
          horizontal
        />
      </div>
    </div>
  );
};

export default Dashboard;
