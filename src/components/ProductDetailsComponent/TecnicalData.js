import React from "react";
import { Table } from "react-bootstrap";
import style from "./ProductDetails.module.css";
import { technicalData } from "./../Data/TechnicalData";

const TecnicalData = () => {
  return (
    <div className={style.technical_data_section}>
        <div className={`${style.technical_data_container} container`}>
      <h2 className="text-center mb-3 fs-22 text-uppercase">Technical data</h2>
      <div>
        <Table>
          <tbody>
            {technicalData.map((row, index) => (
              <tr key={index}>
                {row.map((col, index) => (
                  <td>{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </div>
  );
};

export default TecnicalData;
