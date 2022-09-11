import React from 'react'
import {Grow, AppBar, Toolbar, Avatar, Typography, Button} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';

export default function Navbar() {
  const classes = useStyles()
  const user = null;
  return (
    <Grow in>
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <img className={classes.image} src="https://www.squadhelp.com/story_images/visual_images/1652391964-TravelBook-1.jpg" alt='TravelBook' align='center' height='150'/>
            </div>
            <Toolbar className={classes.toolbar}>
              {user ?
                (<div className={classes.profile}>
                  <Avatar className={classes.purple} src={user.result.imageUrl} alt={user.result.name}>
                    {user.result.name.charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                  <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                </div>)
              :
                (
                  <Button component={Link} to="/auth" variant="contained" color="primary">Sign-In</Button>
                )
              }
            </Toolbar>
        </AppBar>
    </Grow>
  )
}




