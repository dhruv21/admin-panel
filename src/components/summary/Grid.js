import "./summary.scss";
import React, { Fragment } from "react";
import { withTranslation } from "react-i18next";
import _ from "lodash";

import { Png } from "../../common";

const Grid = (props) => {
  const { t } = props;
  const { upload, person, seles, settings1, notification1 } = Png;
  return (
    <Fragment>
      <div className="row">
        <div className="col grid-box">
          <img
            src={upload}
            alt={"dashboard"}
            className="d-block mx-auto grid-img"
          />
          <p className="text-center grid-label">
            {_.startCase(t("todaysUpload"))}
          </p>
          <p className="text-center grid-number-label">{"205"}</p>
        </div>

        <div className="col grid-box">
          <img
            src={person}
            alt={"dashboard"}
            className="d-block mx-auto grid-img"
          />
          <p className="text-center grid-label">{_.startCase(t("newLeads"))}</p>
          <p className="text-center grid-number-label">{"205"}</p>
        </div>

        <div className="col grid-box">
          <img
            src={seles}
            alt={"dashboard"}
            className="d-block mx-auto grid-img"
          />
          <p className="text-center grid-label">
            {_.startCase(t("totalSales"))}
          </p>
          <p className="text-center grid-number-label">{"4021"}</p>
        </div>
      </div>

      <div className="row">
        <div className="col grid-box">
          <img
            src={seles}
            alt={"dashboard"}
            className="d-block mx-auto grid-img"
          />
          <p className="text-center grid-number-label">{"4021"}</p>
        </div>
        <div className="col grid-box">
          <img
            src={settings1}
            alt={"dashboard"}
            className="d-block mx-auto grid-img"
          />
          <p className="text-center grid-number-label">{"4021"}</p>
        </div>
        <div className="col grid-box">
          <img
            src={notification1}
            alt={"dashboard"}
            className="d-block mx-auto grid-img"
          />
          <p className="text-center grid-number-label">{"4021"}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default withTranslation()(Grid);
