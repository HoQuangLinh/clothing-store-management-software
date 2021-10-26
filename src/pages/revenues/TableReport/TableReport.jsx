import React, { useState, useEffect } from "react";

import TableReportPagination from "./TableReportPagination";
import "./table.css";

const TableReport = ({ columns, rows, pageLimit = 10, className }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getPaginatedEntries = (rows, currentpage) => {
    const offset = (currentpage - 1) * pageLimit;
    return rows.slice(offset, offset + pageLimit);
  };
  const totalPage = rows.length / pageLimit;
  const entries = getPaginatedEntries(rows, currentPage);

  return (
    <div className="table-report-container">
      <TableReportPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
      <div className="table-report-content">
        <div className="table-report-content-heading">
          <h2 className="table-report-content-heading-title">
            Báo cáo cuối ngày về bán hàng
          </h2>
          <p>
            Ngày bán <span>10/10/2021</span>
          </p>
          <p>
            Ngày thanh toán <span>10/10/2021</span>
          </p>
        </div>
        <table className="table-report">
          <tr>
            {columns.map((value) => {
              return <th>{value}</th>;
            })}
          </tr>
          {entries.map((row) => {
            return (
              <tr>
                <td>{row.orderId}</td>
                <td>{row.dateTime}</td>
                <td>{row.customer}</td>
                <td>{row.totalPrice}</td>
                <td>{row.profit}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TableReport;
