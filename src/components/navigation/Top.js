import "./navigation.scss";
import React, { Fragment } from "react";
import { withTranslation } from "react-i18next";
import _ from "lodash";

import { Png } from "../../common";

const Top = (props) => {
  const { t } = props;
  const { logo, menu, notification, search, settings, profile } = Png;

  const onMenuClickHandler = () => {
    var rightMenu = document.getElementById("toggle");
    var searchMenu = document.getElementById("top-nav-search");
    var dropdown = document.getElementById("dropdown");

    if (rightMenu.style.display === "none") {
      rightMenu.style.display = "block";
    } else {
      rightMenu.style.display = "none";
    }

    if (searchMenu.style.display === "none") {
      searchMenu.style.display = "block";
      searchMenu.style.display = "flex";
    } else {
      searchMenu.style.display = "none";
    }

    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  };

  return (
    <Fragment>
      <div class="d-md-flex justify-content-between navigation-box top-navigation">
        <div className="d-md-flex align-items-center">
          <div>
            <button className="btn btn-link">
              <img src={logo} alt={"logo"} />
            </button>
            <button
              className="btn btn-link btn-menu"
              onClick={() => onMenuClickHandler()}
            >
              <img src={menu} alt={"menu"} width="24" />
            </button>
          </div>
          <div className="d-flex align-items-center">
            <div class="dropdown" id="dropdown">
              <button
                class="btn btn-link dropdown-toggle dropdown-link"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {_.upperFirst(t("topNavMegaMenu"))}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  {_.upperFirst(t("megaMenu1"))}
                </a>
                <a class="dropdown-item" href="#">
                  {_.upperFirst(t("megaMenu2"))}
                </a>
                <a class="dropdown-item" href="#">
                  {_.upperFirst(t("megaMenu3"))}
                </a>
              </div>
            </div>
            <div class="input-group mb-2" id="top-nav-search">
              <input
                type="text"
                class="form-control search-input"
                id="inlineFormInputGroup"
                placeholder="Search"
              />
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <img src={search} alt={"search"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-flex" id="toggle">
          <button className="btn btn-link">
            <img src={search} alt={"search"} />
          </button>
          <button className="btn btn-link">
            <img src={settings} alt={"settings"} />
          </button>
          <button className="btn btn-link">
            <img src={notification} alt={"notification"} />
          </button>
          <button className="btn btn-link">
            <img src={profile} alt={"profile"} />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default withTranslation()(Top);
