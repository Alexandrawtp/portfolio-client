import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AdminButtons from './AdminButtons';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px',
    width: 350,
    height: 340,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const LoggedInUser = useContext(UserContext);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/project/${props.projectId}`} className='no-style-link'>
          <CardMedia
            className={classes.media}
            image={props.picture}
            alt='Project Home Page'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {props.about}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Grid container justify='space-between' alignItems="center">
          <div>
            <Link to={`/project/${props.projectId}`} className='no-style-link'>
              <Button size='small' color='secondary'>
                Learn More
              </Button>
            </Link>
          </div>
          {LoggedInUser ? (
            <AdminButtons
              projectName={props.name}
              projectId={props.projectId}
            />
          ) : null}
        </Grid>
      </CardActions>
    </Card>
  );
}
