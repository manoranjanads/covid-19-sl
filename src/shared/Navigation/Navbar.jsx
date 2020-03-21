import React from "react";
import { Link } from "react-router-dom";

// Material Stuff
import { AppBar, Toolbar, Typography, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title} noWrap>
          <strong>ශ්‍රී ලංකාවේ නව කොරෝනා ව්‍යාප්තිය (Real-time)</strong>
        </Typography>

        <MenuItem component={Link} to="/">
          ප්‍රධාන පුවරුව (Dashboard)
        </MenuItem>
        <MenuItem component={Link} to="/hospitals">
          රෝහල් වල තත්වය (Hospital Status)
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    display: "block"
  },
  title: {
    display: "block",
    marginRight: 20
  }
});

export default Navbar;
