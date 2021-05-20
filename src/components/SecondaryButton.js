import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

const useStyles = makeStyles({
  root: {
    margin: '20px',
    transition: '0.6s',
    '&:hover': {
      marginLeft: '40px',
      background: 'transparent',
    },
  },
});

const SecondaryButton = (props) => {
  const classes = useStyles();
  const text = props.addText;

  return (
    <>
      {text === 'contact me' ? (
        <Button
          className={classes.root}
          type='submit'
          style={{ color: 'white' }}
        >
          {text}
          <ChevronRightRoundedIcon style={{ color: 'white' }} />
        </Button>
      ) : (
        <Button
          className={classes.root}
          type='submit'
          style={{ color: 'black' }}
        >
          {text}
          <ChevronRightRoundedIcon style={{ color: 'black' }} />
        </Button>
      )}
    </>
  );
};

export default SecondaryButton;
