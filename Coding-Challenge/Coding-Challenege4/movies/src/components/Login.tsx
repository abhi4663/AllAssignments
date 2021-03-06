import React, { useState, useContext } from 'react';
import { useHistory, Route, HashRouter, Link } from 'react-router-dom';
//import { InputGroup, FormControl } from 'react-bootstrap';
import { user } from './user';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




interface Props {
    valid: string,
    handleUserNamePasswordInput: (email: string, password: string) => void
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const LogIn: React.FC<Props> = (Props: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [valid, setValid] = useState<boolean>(true);
    const classes = useStyles();

    const history = useHistory();

    function inputEmail(e: any) {
        setEmail(e.target.value);
    }
    function inputPassword(e: any) {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className='login-field-1'>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
           </Typography>
                        {/* <form className={classes.form} noValidate> */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={inputEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={inputPassword}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => Props.handleUserNamePasswordInput(email, password)}
                        >
                            <HashRouter>
                                <Link to="/">Login</Link>
                            </HashRouter>
                        </Button>
                        {Props.valid === 'error' ? (
                            <div style={{ color: 'red' }}>Invalid email or Password</div>
                        ) : null}
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link to="/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        {/* </form> */}
                    </div>
                </Container>
            </div>

        </>
    )
}

export default LogIn
