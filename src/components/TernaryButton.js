import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const TernaryButton = (props) => {
  const text = props.addText;

  return <Button variant='contained' type="submit" color='primary' size='large'>{text}</Button>;
};

export default TernaryButton;
