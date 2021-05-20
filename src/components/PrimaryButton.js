import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(45deg, #105345 30%, #21CBF3 80%)`,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '30px 0',
  },
});

const PrimaryButton = (props) => {
  const text = props.addText;
  const classes = useStyles();

  return <Button className={classes.root} type="submit">{text}</Button>;
};

export default PrimaryButton;
