import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PhoneIcon from 'material-ui-icons/Phone';

import MobileNavMenu from './mobile_nav_menu.MUI';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function AppBarNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Sunny B Solar
          </Typography>
          <ToolbarRightGroup>
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
            <StyledPhoneIcon />
            <StyledPhoneNum href="tel:+1-516-123-4567">
              (516) 123-4567
            </StyledPhoneNum>
          </ToolbarRightGroup>
          <ToolbarRightGroupMobile>
            <StyledPhoneIcon />
            <StyledPhoneNum href="tel:+1-516-123-4567">
              (516) 123-4567
            </StyledPhoneNum>
            <StyledDropdown>
              <MobileNavMenu />
            </StyledDropdown>
          </ToolbarRightGroupMobile>
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
  background-position: 0 100%;
  background-size: 0% 0.2em;
  margin-left: 1rem;
  margin-right: 1rem;

  &:hover {
    background-image: linear-gradient(120deg, #fcd306 0%, #fcd306 100%);
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 100% 0.2em;
    transition: 0.5s ease all;
  }
`;

const StyledPhoneNum = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

const ToolbarRightGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ToolbarRightGroupMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 601px) {
    display: none;
  }
`;

const StyledDropdown = styled.div`
  margin-left: 1rem;
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  margin-top: 4.5px;
  font-size: 20px;
  color: #f79522;
`;
