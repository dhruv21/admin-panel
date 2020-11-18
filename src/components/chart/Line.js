import "./chart.scss";
import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import { withTranslation } from "react-i18next";
import _ from "lodash";

const LineChart = (props) => {
  const { t } = props;
  return (
    <Fragment>
      <div className="chart-box">
        <p className="chart-title"> {_.upperFirst(t("linechartTitle"))}</p>
        <Line
          data={{
            labels: ["1", "2", "3", "4", "5", "6"],
            datasets: [
              {
                data: [40, 70, 20, 74, 30, 65, 40],
                fill: false,
                backgroundColor: "#663399",
                borderColor: "#663399",
              },
            ],
          }}
          options={{
            legend: {
              display: false,
            },
            label: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.yLabel;
                },
              },
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    beginAtZero: false,
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </Fragment>
  );
};

export default withTranslation()(LineChart);
