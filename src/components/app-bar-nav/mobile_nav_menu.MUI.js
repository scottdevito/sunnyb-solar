import React, { Component } from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from 'material-ui-icons/Menu';

class MobileNavMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <StyledMenuIcon
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Menu
        </StyledMenuIcon>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <StyledMenuLinkHome to="/">Home</StyledMenuLinkHome>
          </MenuItem>
          <StyledMenuLink to="/about">
            <MenuItem onClick={this.handleClose}>About Us</MenuItem>
          </StyledMenuLink>
          <StyledMenuLink to="/solar-info">
            <MenuItem onClick={this.handleClose}>How Solar Works</MenuItem>
          </StyledMenuLink>
        </Menu>
      </div>
    );
  }
}

export default MobileNavMenu;

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

// Seperate styling for Home button width as workaround for active NavLink bug
// Bug occurs on 'Home' MenuItem when MenuItem wraps Link
const StyledMenuLinkHome = styled(Link)`
  text-decoration: none;
  color: #000;
  width: 100%;
`;

const StyledMenuIcon = styled(MenuIcon)`
  padding-top: 6px;
`;
