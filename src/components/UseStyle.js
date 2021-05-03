import { makeStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
const color = deepPurple[300];

const UseStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: color,
    },
  },
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  dialogueTitle: {
    fontSize: '18px',
    fontWeight: 450,
    fontFamily: 'Roboto',
    padding: '50px',
  },
  deleteButton: {
    margin: theme.spacing(1),
    background: 'rgb(99, 88, 255, 0.7)',
    '&:hover': {
      background: 'rgb(99, 88, 255, 1)',
    },
  },
  editButton: {
    border: 'solid 1px rgb(99, 88, 255, 0.7)',
    color: 'rgb(99, 88, 255, 0.7)',
  },
  container: {
    display: 'flex',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: '10px',
  },
}));

export default UseStyles;
