import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PhoneIcon from 'material-ui-icons/Phone';

import MobileNavMenu from './mobile_nav_menu.MUI';
import SunnyBLogo from '../../assets/SunnyBLogoSmall.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
  navBar: {
    boxShadow: '0 0 0 0',
  },
};

function AppBarNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="inherit"
        classes={{
          root: classes.navBar,
        }}
      >
        <Toolbar>
          <StyledLogo src={SunnyBLogo} alt="Sunny B Logo" />
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
              to="/solar-info"
              activeStyle={{
                backgroundImage:
                  'linear-gradient(120deg, #F79522 0%, #FCD306 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 100%',
                backgroundSize: '100% 0.2em',
              }}
            >
              How Solar Works
            </StyledNavLink>
            <StyledPhoneIcon />
            <StyledPhoneNum href="tel:+1-516-318-4956">
              (516) 318-4956
            </StyledPhoneNum>
          </ToolbarRightGroup>
          <ToolbarRightGroupMobile>
            <StyledPhoneIcon />
            <StyledPhoneNum href="tel:+1-516-318-4956">
              (516) 318-4956
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

const StyledLogo = styled.img`
  width: 10rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0);

  @media(max-width: 768px) {
    width: 8rem;
  })
`;
