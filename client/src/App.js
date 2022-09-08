import React, { useState, useEffect }  from 'react';
import './App.css';
import { getPosts } from './actions/action_posts'
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';

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
            <Navbar />
              <Grow in>
                <Container>
                  <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
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
