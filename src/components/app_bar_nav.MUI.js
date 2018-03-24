import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function AppBarNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Sunny B Solar
          </Typography>
          <StyledNavLink
            exact
            to="/"
            activeStyle={{
              backgroundImage:
                'linear-gradient(120deg, #F79522 0%, #FCD306 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 100%',
              backgroundSize: '100% 0.2em',
            }}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            activeStyle={{
              backgroundImage:
                'linear-gradient(120deg, #F79522 0%, #FCD306 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 100%',
              backgroundSize: '100% 0.2em',
            }}
          >
            About Us
          </StyledNavLink>
          <StyledNavLink
            to="/pricing"
            activeStyle={{
              backgroundImage:
                'linear-gradient(120deg, #F79522 0%, #FCD306 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 100%',
              backgroundSize: '100% 0.2em',
            }}
          >
            Pricing Plans
          </StyledNavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppBarNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarNav);

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
`;
