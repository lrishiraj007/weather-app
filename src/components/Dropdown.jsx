import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const age = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [selectedCity,setCity] = React.useState('');


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onSelectCity =(e) =>{
    setCity(e.target.value);
    props.passValue(e.target.value);
  }

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedCity}
          onChange= {onSelectCity}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5128581}>New York</MenuItem>
          <MenuItem value={5368361}>Los Angeles</MenuItem>
          <MenuItem value={3582383}>Chicago</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}