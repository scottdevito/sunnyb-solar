import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: '#000',
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  inputUnderline: {
    '&:after': {
      backgroundColor: '#F79522',
    },
  },
});

function ContactForm(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl} error={props.isError}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          {props.isError ? 'Please enter a name' : 'Name'}
        </InputLabel>
        <Input
          classes={{
            underline: classes.inputUnderline,
          }}
          id="custom-color-input"
          type="name"
          onChange={event => {
            props.onContactInputChange(event, 'name');
          }}
          error={props.isError}
        />
      </FormControl>

      <FormControl className={classes.formControl} error={props.isError}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          {props.isError ? 'Please enter a valid email' : 'Email'}
        </InputLabel>
        <Input
          classes={{
            underline: classes.inputUnderline,
          }}
          id="custom-color-input"
          type="email"
          onChange={event => {
            props.onContactInputChange(event, 'email');
          }}
          error={props.isError}
        />
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(ContactForm);
