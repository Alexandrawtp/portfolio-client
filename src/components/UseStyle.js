import {
  makeStyles,
} from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  root: {
    background: '#7864ec',
    borderRadius: 40,
    border: 0,
    color: 'white',
    height: 32,
    padding: '0 20px',
    textTransform: 'capitalize',
    margin: "10px",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "rgb(73, 58, 156)"
  }
  },
  transparentButton: {
    background: 'transparent',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 48,
    padding: '0 30px',
    textTransform: 'capitalize',
    marginTop: 20,
  },
  container: {
    display: "flex",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: "10px",
  },
}));

export default UseStyles;
