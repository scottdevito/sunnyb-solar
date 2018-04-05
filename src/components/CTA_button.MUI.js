import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #7DA453 20%, #AED581 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 2px 2px 2px rgba(0, 0, 0, .1)',
    width: '55%',
    marginTop: '1rem',
  },
};

function CTAButton(props) {
  return (
    <Button className={props.classes.button}>
      {props.children ? props.children : 'class names'}
    </Button>
  );
}

CTAButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CTAButton);
