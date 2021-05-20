import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import MyDialogue from './Dialogue';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const AdminButtons = (props) => {
  const classes = useStyles();
  const [openedDialogue, setOpenedDialogue] = useState(false);
  const [nameToDelete, setNameToDelete] = useState([]);
  const [idToDelete, setIdToDelete] = useState([]);

  return (
    <>
      <div className={classes.root}>
        <Fab
          color='primary'
          aria-label='edit'
          href={`/project/edit/${props.projectId}`}
        >
          <EditIcon />
        </Fab>
        <Fab
          color='secondary'
          aria-label='edit'
          onClick={() => {
            setOpenedDialogue(true);
            setIdToDelete(props.projectId);
            setNameToDelete(props.projectName);
          }}
        >
          <DeleteIcon />
        </Fab>
      </div>
      <MyDialogue
        projectName={nameToDelete}
        projectId={idToDelete}
        open={openedDialogue}
        setOpen={setOpenedDialogue}
      />
    </>
  );
};

export default AdminButtons;
