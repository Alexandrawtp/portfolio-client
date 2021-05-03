import React from 'react';
import config from '../config';
import axios from 'axios';
import UseStyle from './UseStyle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Dialogue = (props) => {
  const classes = UseStyle();

  const handleDelete = (id) => {
    axios
      .delete(`${config.API_URL}/api/project/delete/${id}`, {
        withCredentials: true,
      })
      .then(() => window.location.reload())
      .catch((err) => {
        console.log('Delete failed', err);
      });
  };

  const handleCloseAndDelete = (projectId) => {
    props.setOpen(false);
    handleDelete(projectId);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle
          id='alert-dialog-slide-title'
          disableTypography
          className={classes.dialogueTitle}
        >{`Do you really want to delete ${props.projectName} ?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            No
          </Button>
          <Button
            onClick={() => handleCloseAndDelete(props.projectId)}
            color='primary'
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dialogue;
