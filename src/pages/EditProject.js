import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/NavBar';
import PrimaryButton from '../components/PrimaryButton';


const EditForm = (props) => {
  let projectId = props.match.params.id;
  const [project, setProject] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/project/${projectId}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log('Getting project failed', err));
  }, [setProject, projectId]);

  const handleChange = (e) => {
    let field = e.target.name;
    let newText = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject[field] = newText;
    setProject(cloneProject);
  };

  const handleEdit = (e, project) => {
    e.preventDefault();

    axios
      .patch(
        `${config.API_URL}/api/project/modify/${project._id}`,
        {
          name: project.name,
          date: project.date,
          about: project.about,
          description: project.description,
          technologies: project.technologies,
          url: project.url,
          teammates: project.teammates,
          githubRepo: project.githubRepo,
          backgroundColor: project.backgroundColor,
          image: project.image,
        },
        { withCredentials: true }
      )
      .then(() => history.push('/'))
      .catch((err) => err);
  };

  return (
    <>
      <Navbar />
      <div className='divider' />
      <form onSubmit={(e) => handleEdit(e, project)} className='form'>
          <React.Fragment>
            <Typography variant='h6' gutterBottom>
              Modify project
            </Typography>
            <div className='form-edit'>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='name'
                    label='Name'
                    multiline
                    focused
                    fullWidth
                    rows={2}
                    defaultValue={project.name}
                    onChange={handleChange}
                    color='secondary'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='date'
                    label='Date'
                    multiline
                    fullWidth
                    focused
                    rows={2}
                    defaultValue={project.date}
                    onChange={handleChange}
                    color='secondary'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='about'
                    label='About'
                    multiline
                    fullWidth
                    focused
                    rows={2}
                    defaultValue={project.about}
                    onChange={handleChange}
                    color='secondary'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='description'
                    label='Description'
                    multiline
                    fullWidth
                    focused
                    rows={4}
                    defaultValue={project.description}
                    onChange={handleChange}
                    color='secondary'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='url'
                    label='Url'
                    multiline
                    fullWidth
                    focused
                    rows={2}
                    defaultValue={project.url}
                    onChange={handleChange}
                    color='secondary'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='teammates'
                    label='Teammates'
                    multiline
                    fullWidth
                    focused
                    rows={2}
                    defaultValue={project.teammates}
                    onChange={handleChange}
                    color='secondary'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='technologies'
                    label='Technologies'
                    multiline
                    fullWidth
                    focused
                    rows={2}
                    defaultValue={project.technologies}
                    onChange={handleChange}
                    color='secondary'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='githubRepo'
                    label='Github Repository'
                    multiline
                    fullWidth
                    focused
                    rows={2}
                    defaultValue={project.githubRepo}
                    onChange={handleChange}
                    color='secondary'
                  />
                </Grid>
              </Grid>
            </div>
          </React.Fragment>
        <Grid container justify='center' width='100%'>
          <PrimaryButton type='submit' addText='submit' />
        </Grid>
      </form>
    </>
  );
};

export default EditForm;
