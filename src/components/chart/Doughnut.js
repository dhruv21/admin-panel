import "./chart.scss";
import React, { Fragment } from "react";
import { Doughnut } from "react-chartjs-2";
import { withTranslation } from "react-i18next";
import _ from "lodash";

const DoughnutChart = (props) => {
  const { t } = props;

  return (
    <Fragment>
      <Doughnut
        options={{
          responsive: true,
          cutoutPercentage: 50,
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontSize: 13,
            },
          },
        }}
        data={{
          datasets: [
            {
              label: "# of Votes",
              data: [80, 20],
              backgroundColor: ["#663399", "#ced4da"],
              borderColor: ["#663399", "#ced4da"],
              borderWidth: 1,
            },
          ],
          labels: [
            _.upperFirst(t("doughnutLabel1")),
            _.upperFirst(t("doughnutLabel2")),
          ],
        }}
      />
    </Fragment>
  );
};

export default withTranslation()(DoughnutChart);
