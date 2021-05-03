import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import deepPurple from '@material-ui/core/colors/deepPurple';
const color = deepPurple[900];

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(45deg, #5e66ff 30%, #ffaba0 90%)`,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: color,
    margin: '20px 0'
  },
});

const PrimaryButton = (props) => {
  const text = props.addText;
  const classes = useStyles();

  return <Button className={classes.root} type="submit">{text}</Button>;
};

export default PrimaryButton;
