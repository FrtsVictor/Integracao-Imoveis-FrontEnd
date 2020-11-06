import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectFavoritos = ({ itemList, listName }) => {
  const classes = useStyles();
  const [selects, setSelects] = React.useState('');

  const handleChange = (event) => {
    setSelects(event.target.value);
  };

  const list = [
    ['Teresopolis', 'bairro=teresopolis'],
    ['Alto', 'bairro=alto'],
    ['Fatima', 'bairro=teresopolis'],
    ['Comary', 'bairro=alto'],
  ];

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{listName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selects}
          onChange={handleChange}
        >
          {list.map((item) => <MenuItem value={item[1]}>{item[0]}</MenuItem>)}
          {/* <MenuItem value={list[0][1]}>{list[0][0]}</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};
