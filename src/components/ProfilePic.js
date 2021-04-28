import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Profile Picture" src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619603464/icons/photoid.png" className={classes.large} />
    </div>
  );
}