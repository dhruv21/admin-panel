import React, { Fragment } from "react";
import { withTranslation } from "react-i18next";
import _ from "lodash";

import { Tabel, DoughnutChart } from "..";

const TableSummary = (props) => {
  const { t } = props;
  return (
    <Fragment>
      <div className="grid-box summary-table">
        <p className="summary-title">{_.startCase(t("lastMonthSummary"))}</p>
        <div className="d-md-flex align-items-center">
          <Tabel />
          <div>
            <DoughnutChart />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withTranslation()(TableSummary);
