import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: `rgb(99, 88, 255, 0.5)`,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 20px',
    margin: '20px 0',
    transition: '0.7s',
    '&:hover': {
      background: 'rgb(99, 88, 255, 1)'
    },
  },
});

const TernaryButton = (props) => {
  const text = props.addText;
  const classes = useStyles();

  return <Button className={classes.root} type="submit">{text}</Button>;
};

export default TernaryButton;
