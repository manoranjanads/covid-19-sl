import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// My Stuff
import LocalDashboard from "./LocalDashboard";
import GlobalDashboard from "./GlobalDashboard";
import HospitalList from "../Hospital/HospitalList";
import Navbar from "../shared/Navigation/Navbar";
import {
  Typography,
  Container,
  Paper,
  LinearProgress
} from "@material-ui/core";

function Dashboard() {
  const [stats, setStats] = useState({ dashboard: {}, hospitalData: [] });

  useEffect(() => {
    fetch("https://hpb.health.gov.lk/api/get-current-statistical")
      .then(response => response.json())
      .then(response => {
        if (response.success === true) {
          setStats({
            dashboard: response.data,
            hospitalData: response.data.hospital_data
          });
        }
      })
      .catch(() => console.log("Something went wrong..."));
  }, []);

  const localDasboard = () => {
    return (
      <div>
        <br></br> <br></br>
        <LocalDashboard dashboardData={stats.dashboard} />
        <Paper style={{ marginTop: 20 }} />
        <br></br>
        <br></br>
        <hr width="100%"></hr>
        <br></br>
        <h2>
          <font color="gray">ගෝලීය තත්වය</font>
        </h2>
        <br></br>
        <GlobalDashboard dashboardData={stats.dashboard} />
      </div>
    );
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Container style={{ marginTop: 30 }}>
          <Switch>
            <Route path="/hospitals">
              <Typography variant="h5">
                <strong>
                  ශ්‍රී ලංකාවේ කොරෝනා ආසාධිතයින් සඳහා වෙන්කළ රෝහල් වල දැනට තත්වය{" "}
                </strong>
              </Typography>
              <Typography variant="h5">
                <strong>
                  {" "}
                  (Sri Lanka Hospitals Reserved for Coronavirus){" "}
                </strong>
              </Typography>
              <Typography variant="subtitle1">{`Last updated (SL Time): ${stats.dashboard.update_date_time}`}</Typography>
              <HospitalList tableData={stats.hospitalData} />
            </Route>
            <Route path="/">
              {stats.hospitalData.length > 0 ? (
                localDasboard()
              ) : (
                <LinearProgress variant="query" />
              )}
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Dashboard;
