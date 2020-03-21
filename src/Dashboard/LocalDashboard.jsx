import React from "react";

// Material stuff
import {
  blue,
  orange,
  green,
  grey,
  red,
  blueGrey,
  amber
} from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";

// My stuff
import DashboardCard from "./DashboardCard";

function LocalDashboard({ dashboardData }) {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_new_cases}
            colorLevel={red[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local (New Cases) - නව ආසධිතයින්"
          />
        </Grid>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_total_cases}
            colorLevel={orange[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local (Total cases) - මුළු ආසාධිතයින්"
          />
        </Grid>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_recovered}
            colorLevel={green[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local (Recovered) - සුවය ලැබූ"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_deaths}
            colorLevel={grey[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local (Deaths) - මුළු මරණ"
          />
        </Grid>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_new_deaths}
            colorLevel={blueGrey[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local (New deaths) - නව මරණ"
          />
        </Grid>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_total_number_of_individuals_in_hospitals}
            colorLevel={amber[800]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Total (in Observation) - මුළු අධීක්ෂණ"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default LocalDashboard;
