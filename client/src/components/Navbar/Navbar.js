import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Container } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
        <Container maxWidth="xl">
        <div className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h6" align="center">Share</Typography>
        <Typography component={Link} to="/" className={classes.heading} variant="h6" align="center">Discover</Typography>
        <Typography component={Link} to="/" className={classes.heading} variant="h6" align="center">Upload</Typography>
        <Typography component={Link} to="/" className={classes.heading} variant="h6" align="center">Your Memories</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button  className={classes.logout} color="inherit" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" color="default">Sign In</Button>
        )}
      </Toolbar>
    </div>
        </Container>
      </>
  );
};

export default Navbar;
