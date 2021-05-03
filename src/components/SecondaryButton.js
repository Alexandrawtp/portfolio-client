import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    borderRadius: 3,
    height: 48,
    padding: '0 30px',
    margin: '20px 0',
    transition: '0.6s',
    '&:hover': {
      marginLeft: '10px',
      background: 'transparent',
    },
  },
});

const SecondaryButton = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.addText === 'github' ? (
        <Button
          className={classes.root}
          type='submit'
          style={{ color: 'black' }}
        >
          Github
          <ChevronRightRoundedIcon style={{ color: 'black' }} />
        </Button>
      ) : (
        <Button
          className={classes.root}
          type='submit'
          style={{ color: 'white' }}
        >
          Contact me
          <ChevronRightRoundedIcon style={{ color: 'white' }} />
        </Button>
      )}
    </>
  );
};

export default SecondaryButton;
