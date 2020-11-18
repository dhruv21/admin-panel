import "./table.scss";
import React, { Fragment } from "react";
import { withTranslation } from "react-i18next";
import _ from "lodash";

import { Png } from "../../common";

const TabelWithPagination = (props) => {
  const { t, tableDetail } = props;
  const { next, previous } = Png;

  return (
    <Fragment>
      <div class="table-box">
        <table className="table table-borderless">
          <thead className="table-border-bottom">
            <tr>
              <th className="table-pg-th" scope="col">
                {_.upperFirst(t("thumbnail"))}
              </th>
              <th className="table-pg-th " scope="col">
                {_.upperFirst(t("title"))}
              </th>
              <th className="table-pg-th " scope="col">
                {_.upperFirst(t("category"))}
              </th>
              <th className="table-pg-th " scope="col">
                {_.upperFirst(t("description"))}
              </th>
            </tr>
          </thead>
          <tbody>
            {_.map(tableDetail, (detail) => {
              return (
                <tr>
                  <td>
                    <div className="table-thumbnail" />
                  </td>
                  <td className="table-text ">{detail.title}</td>
                  <td className="table-text">{detail.category}</td>
                  <td className="table-text">{detail.description}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
        <div className="d-flex justify-content-between table-footer">
          <p className="table-total-page"> {"20 Total"}</p>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <img src={previous} alt="previous" />
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <img src={next} alt="next" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default withTranslation()(TabelWithPagination);
