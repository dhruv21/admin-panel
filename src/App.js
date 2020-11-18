import React, { Fragment } from "react";
import { Png } from "./common";

import {
  TopNavigation,
  LeftNavigation,
  Breadcrumb,
  TableSummary,
  TopAuthors,
  LineChart,
  GridSummary,
  TabelWithPagination,
} from "./components";

const { author1, author2, author3 } = Png;

const tableDetail = [
  {
    title: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass 1",
    category: "speaker",
    description: "Admodum assentior ad duo 1",
  },
  {
    title: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass 2",
    category: "speaker",
    description: "Admodum assentior ad duo 2",
  },
  {
    title: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass 3",
    category: "speaker",
    description: "Admodum assentior ad duo 3",
  },
  {
    title: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass 4",
    category: "speaker",
    description: "Admodum assentior ad duo 4",
  },
];

const topAuthorDetail = [
  {
    profile: author1,
    name: "david hopkins",
    information: "lorem ipsum dolor sit amet consectetur.",
  },
  {
    profile: author2,
    name: "james mitchell",
    information: "lorem ipsum dolor sit amet consectetur.",
  },
  {
    profile: author3,
    name: "jessica mitchell",
    information: "lorem ipsum dolor sit amet consectetur.",
  },
  {
    profile: author1,
    name: "david hopkins",
    information: "lorem ipsum dolor sit amet consectetur.",
  },
];

const App = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <TopNavigation />

        <div className="row">
          <div className="col-lg-1 col-2 p-0 m-0">
            <LeftNavigation />
          </div>
          <div className="col-lg-11 col-10">
            <Breadcrumb />

            <div className="row">
              <div className="col-lg-6">
                <GridSummary />
              </div>
              <div className="col-lg-6">
                <LineChart />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <TableSummary />
              </div>
              <div className="col-lg-6">
                <TopAuthors topAuthorDetail={topAuthorDetail} />
              </div>
            </div>

            <TabelWithPagination tableDetail={tableDetail} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default App;
