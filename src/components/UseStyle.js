import {
  makeStyles,
} from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";
const color = blue[600];

const UseStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: color,
    },
  },
  paper: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 4,
    border: 0,
    color: 'white',
    height: 32,
    padding: '0 20px',
    textTransform: 'capitalize',
    margin: "10px 30px 10px 0",
  },
  dialogueTitle : {
    fontSize: "18px",
    fontWeight: 450,
    fontFamily: "Roboto",
    padding: '50px',
  },
  button: {
    margin: theme.spacing(1),
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
