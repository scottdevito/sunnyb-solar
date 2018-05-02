import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

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
    width: '14rem',
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
  selectStyle: {
    backgroundColor: '#F79522',
  },
  checked: {
    color: '#F79522',
    '&$checked': {
      color: '#F79522',
    },
  },
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
  checkRoot: {
    marginTop: '1rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
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
          {props.isError ? 'Please enter a name' : 'Name*'}
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
          {props.isError ? 'Please enter a valid email' : 'Email*'}
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

      <FormControl className={classes.formControl} error={props.isError}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          {props.isError ? 'Please enter a city' : 'City*'}
        </InputLabel>
        <Input
          classes={{
            underline: classes.inputUnderline,
          }}
          id="custom-color-input"
          type="city"
          onChange={event => {
            props.onContactInputChange(event, 'city');
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
          {props.isError ? 'Please enter a phone number' : 'Phone Number*'}
        </InputLabel>
        <Input
          classes={{
            underline: classes.inputUnderline,
          }}
          id="custom-color-input"
          type="tel"
          onChange={event => {
            props.onContactInputChange(event, 'phone');
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
          Employment Status:
        </InputLabel>
        <Select
          classes={{}}
          value={props.employmentStatus}
          name="employmentStatus"
          onChange={props.handleSelectChange}
        >
          <MenuItem value="retired">Retired</MenuItem>
          <MenuItem value="employed">Employed</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        classes={{ root: classes.checkRoot }}
        control={
          <Checkbox
            checked={props.isOkayToContact}
            onChange={props.handleCheckChange}
            name="isOkayToContact"
            classes={{
              checked: classes.checked,
            }}
          />
        }
        label="Is it okay for us to call you about this estimate?"
      />
    </div>
  );
}

export default withStyles(styles)(ContactForm);
