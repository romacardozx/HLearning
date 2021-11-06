import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Link} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hlearning from "../../images/Hlearning.png";
//import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
    background: "black",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "100%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#38b6ff",
  },
  colorText2: {
    color: "#38b6ff",
    fontSize: "2rem",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: '#fff',
    fontSize: '4rem',
  },
  goDown: {
    color: "#38b6ff",
    fontSize: "4rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
      <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
              <img
              height="60"
              width="60" 
              src={Hlearning} 
              alt="HLearning" />
              <span className={classes.colorText2}>HLearning</span>
          </Toolbar>
        </AppBar>

        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedSize={50}
        >
          <div className={classes.container}>
            <h1 className={classes.title}>
              Bienvenido a<br />
              H<span className={classes.colorText}>Learning.</span>
            </h1>
            <Link href="/home" smooth={"true"}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Link>
          </div>
        </Collapse>
      </div>
  );
}
