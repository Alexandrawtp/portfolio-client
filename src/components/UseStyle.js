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
    background: 'rgb(70, 162, 255)',
    borderRadius: 40,
    border: 0,
    color: 'white',
    height: 32,
    padding: '0 20px',
    textTransform: 'capitalize',
    margin: "10px 30px 10px 0",
    "&:hover": {
      backgroundColor: "rgb(70, 162, 255)"
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
