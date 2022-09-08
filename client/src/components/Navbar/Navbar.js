import React from 'react'
import {Grow, AppBar} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const classes = useStyles()
  return (
    <Grow in>
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <img component={Link} className={classes.image} src="https://www.squadhelp.com/story_images/visual_images/1652391964-TravelBook-1.jpg" alt='TravelBook' align='center' height='150'/>
            </div>
        </AppBar>
    </Grow>
  )
}




