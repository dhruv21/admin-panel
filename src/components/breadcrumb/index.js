import "./breadcrumb.scss";
import React, { Fragment } from "react";
import { withTranslation } from "react-i18next";
import _ from "lodash";

const Breadcrumb = (props) => {
  const { t } = props;
  return (
    <Fragment>
      <div className="d-flex align-self-center breadcrumb-container">
        <p className="breadcrumb-header">{_.upperFirst(t("home"))}</p>
        <p className="breadcrumb-title"> {_.upperFirst(t("dashboard"))}</p>
        <div className="breadcrumb-divider" />
        <p className="breadcrumb-version"> {_.upperFirst(t("version2"))}</p>
      </div>
    </Fragment>
  );
};

export default withTranslation()(Breadcrumb);
