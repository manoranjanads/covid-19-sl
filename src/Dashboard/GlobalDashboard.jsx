import React from "react";
import NumberFormat from "react-number-format";

// Material Stuff
import { Chip } from "@material-ui/core";

function GlobalDashboard({ dashboardData }) {
  return (
    <React.Fragment>
      නව ආසාදිත (New):{" "}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_new_cases}
            thousandSeparator={true}
            displayType={"text"}
          />
        }
      />{" "}
      <strong>|</strong> මුළු ආසාදිත (Total Cases):{" "}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_total_cases}
            thousandSeparator={true}
            displayType={"text"}
            color={"blue"}
          />
        }
      />{" "}
      <strong>|</strong> නව මරණ (New Deaths):{" "}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_new_deaths}
            thousandSeparator={true}
            displayType={"text"}
          />
        }
      />{" "}
      <strong>|</strong> මුළු මරණ (Total Deaths):{" "}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_deaths}
            thousandSeparator={true}
            displayType={"text"}
          />
        }
      />{" "}
      <strong>|</strong> සුව වූ (Recoverd):{" "}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_recovered}
            thousandSeparator={true}
            displayType={"text"}
          />
        }
        color="primary"
      />
    </React.Fragment>
  );
}

export default GlobalDashboard;
