import "./topAuthor.scss";
import React, { Fragment } from "react";
import { withTranslation } from "react-i18next";
import _ from "lodash";

const TopAuthors = (props) => {
  const { t, topAuthorDetail } = props;
  return (
    <Fragment>
      <div className="top-author-box">
        <p className="top-author-title">{_.startCase(t("topAuthors"))}</p>

        {_.map(topAuthorDetail, (detail) => {
          return (
            <div className="d-flex justify-content-between align-items-center autor-container ">
              <div className="d-flex align-items-center">
                <img
                  src={detail.profile}
                  alt={"profile"}
                  className="author-profile"
                />
                <div>
                  <p className="author-name">{_.upperFirst(detail.name)}</p>
                  <p className="author-detail">
                    {_.upperFirst(detail.information)}
                  </p>
                </div>
              </div>
              <div>
                <button className="btn btn-link btn-follow">
                  {_.upperFirst(t("follow"))}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default withTranslation()(TopAuthors);
