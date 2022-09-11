import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, {useState} from 'react'
import Input from './Input';
import useStyles from './styles'
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


export default function Auth() {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState(initialState);

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };
    const handleSubmit = () => {
        console.log("submit");
    }
    const handleChange = () => {
        console.log("change");
    }
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
    <div>
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                               <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                               </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    </div>
    )
}
