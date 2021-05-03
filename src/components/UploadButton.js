import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
    },
  },
  input: {
    display: 'none',
  },
}));


const UploadButton = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h6' gutterBottom style={{marginTop: 50}}>
        Add a picture
      </Typography>
      <div className={classes.root} style={{margin: '50px 0'}}>
        <input
          name='image'
          className={classes.input}
          id='contained-button-file'
          type='file'
        />
        <label htmlFor='contained-button-file'>
          <Fab color='primary' component='span'>
            <ImageIcon />
          </Fab>
        </label>
      </div>
    </>
  );
};

export default UploadButton;
