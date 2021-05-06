import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    border: 'solid 4px white',
  },
  small: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: 'solid 4px white',
    margin: 0
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 599.95px)');

  return (
    <div className={classes.root}>
      <Avatar
        alt='Profile Picture'
        src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1619603464/icons/photoid.png'
        className={matches ? classes.small : classes.large}
      />
    </div>
  );
}
