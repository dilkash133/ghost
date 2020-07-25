import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/Logo.png';
import Container from '@material-ui/core/Container';
import './nav.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="mainHeader">
      <Container className="mainContainer">
      <Toolbar className="mainContainerInner">
          <div className="logo">
            <img src={logo} width="100" />
          </div>
          <div className="nav">
            <Button>About</Button>
            <Button>Latest News</Button>
            <Button>Comunity</Button>
            <Button>Resources</Button>
          </div>
          <div className="rightButton">
            <Button color="inherit">Get Ghost</Button>
          </div>
        </Toolbar>
      </Container>
      </AppBar>
    </div>
  );
}
