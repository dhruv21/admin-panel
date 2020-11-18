import "./navigation.scss";
import React, { Fragment } from "react";
import { withTranslation } from "react-i18next";
import _ from "lodash";

import { Png } from "../../common";

const Left = (props) => {
  const { t } = props;
  const {
    dashboard,
    uiKits,
    apps,
    forms,
    dataTables,
    sessions,
    page,
    icons,
    other,
    doc,
    rectangle,
  } = Png;

  return (
    <Fragment>
      <div className="d-flex flex-column navigation-box left-navigation">
        <button className="btn btn-link menu-item">
          <img src={dashboard} alt={"dashboard"} />
          <p className="btn-text">{_.upperFirst(t("leftNavDashboard"))}</p>
          <img src={rectangle} alt={"rectangle"} className="active-link" />
        </button>

        <button className="btn btn-link menu-item">
          <img src={uiKits} alt={"ui-kits"} />
          <p className="btn-text">{_.upperFirst(t("leftNavUiKits"))}</p>
        </button>

        <button className="btn btn-link menu-item">
          <img src={apps} alt={"apps"} />
          <p className="btn-text">{_.upperFirst(t("leftNavApps"))}</p>
        </button>

        <button className="btn btn-link menu-item">
          <img src={forms} alt={"forms"} />
          <p className="btn-text">{_.upperFirst(t("leftNavForms"))}</p>
        </button>

        <button className="btn btn-link menu-item">
          <img src={dataTables} alt={"data-tables"} />
          <p className="btn-text">{_.upperFirst(t("leftNavDataTables"))}</p>
        </button>

        <button className="btn btn-link menu-item">
          <img src={sessions} alt={"sessions"} />
          <p className="btn-text">{_.upperFirst(t("leftNavSessions"))}</p>
        </button>

        <button className="btn btn-link menu-item">
          <img src={page} alt={"page"} />
          <p className="btn-text">{_.upperFirst(t("leftNavPage"))}</p>
        </button>

        <button className="btn btn-link menu-item">
          <img src={icons} alt={"icons"} />
          <p className="btn-text">{_.upperFirst(t("leftNavIcons"))}</p>
        </button>

        <button className="btn btn-link menu-item">
          <img src={other} alt={"other"} />
          <p className="btn-text">{_.upperFirst(t("leftNavOther"))}</p>
        </button>

        <button className="btn btn-link menu-item">
          <img src={doc} alt={"doc"} />
          <p className="btn-text">{_.upperFirst(t("leftNavDoc"))}</p>
        </button>
      </div>
    </Fragment>
  );
};

export default withTranslation()(Left);
