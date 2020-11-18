import "./table.scss";
import React, { Fragment } from "react";
import { withTranslation } from "react-i18next";
import _ from "lodash";

const Tabel = (props) => {
  const { t } = props;

  return (
    <Fragment>
      <table class="table">
        <thead>
          <tr className="table-header">
            <th className="table-th " scope="col">
              {_.upperFirst(t("item"))}
            </th>
            <th className="table-th " scope="col">
              {_.upperFirst(t("status"))}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-item-name">{"Portable Speaker"}</td>
            <td className="table-item-status status-success">{"+ $1200"}</td>
          </tr>
          <tr>
            <td className="table-item-name">{"Portable Speaker"} </td>
            <td className="table-item-status .status-dark">{"In Stock"}</td>
          </tr>
          <tr>
            <td className="table-item-name">{"Portable Headphone"} </td>
            <td className="table-item-status status-danger">
              {"Out of stock"}
            </td>
          </tr>
          <tr>
            <td className="table-item-name">{"Watch"} </td>
            <td className="table-item-status status-warning">{"Low stock"}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default withTranslation()(Tabel);
