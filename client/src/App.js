import React, { Component, useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';
import { getPosts } from './actions/action_posts'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles'
import { useDispatch } from 'react-redux';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])
  
  return (
    <>
      <Container maxWidth="lg">
              <Grow in>
                  <AppBar className={classes.appBar} position='static' color='inherit'>
                      <img className={classes.image} src="https://www.squadhelp.com/story_images/visual_images/1652391964-TravelBook-1.jpg" alt='TravelBook' align='center' height='150'/>
                      {/* <Typography variant='h2' align='center'>
                          TravelBook
                      </Typography> */}
                  </AppBar>
              </Grow>
              <Grow in>
                <Container>
                  <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                      <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                  </Grid>
                </Container>
              </Grow>
      </Container>
    </>
  );
}

export default App;
