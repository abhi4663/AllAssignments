import React, { useState, useEffect, useContext } from 'react';

import { user } from './user';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LogIn from './Login';
import Register from './Register';

import axios from 'axios';
import { ServiceManager } from '../services/service-layer';
import { MovieContext } from '../reducer/useContext';
import Movies from './Movies';






const NavBar = () => {

    const [window, setWindow] = useState<boolean>(false);
    const [deleteWindow, setDeleteWindow] = useState(false);
    const [loginFailed, setLoginFailed] = useState<string>("");
    const [regSuccessful, setSuccessful] = useState("");
    const [loginUser, setLoginUser] = useState(false);
    const [search, setSearch] = useState("");
    const { dispatch } = useContext(MovieContext);
    const service = new ServiceManager();
    useEffect(() => {

        if (localStorage.getItem("login")) {
            setLoginUser(true);
        }

    }, [window, deleteWindow]);
    const handleNewUser = async (newUser: user) => {
        console.log("hello");

        await fetch('http://localhost:8000/api/user/register',
            {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: { "Content-Type": "application/json" }
            })
        setSuccessful("done");
        setWindow(true);
    };


    const authentication = async (email: string, password: string) => {
        let auth = await fetch('http://localhost:8000/api/user/login', {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" }
        });
        let valid = await auth.json();
        console.log(valid);
        if (valid == "Invalid") {
            setLoginUser(false);
            setLoginFailed("error");
        } else {
            localStorage.setItem("login", valid)
            setLoginUser(true);
            setWindow(true);
            setLoginFailed("Correct");
        }
    }

    useEffect(() => {
        setWindow(false);
    }, [window])
    useEffect(() => {
        setDeleteWindow(false);
    }, [deleteWindow])

    const logOut = async () => {
        setLoginUser(false);
        alert("LogedOut Successfully")
        localStorage.clear();
    }
    function handleTitleChange(event: any) {
        setSearch(event.target.value);
    }
    function handleSearch() {
        service.searchTitle(dispatch, search);
    }
    return (

        <>


            <div>

                <Router>
                    <Navbar className="fixed-top" bg="primary" variant="dark" >
                        <Navbar.Brand><i>Movies</i></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {loginUser ? null : <Nav.Link as={Link} to='/register'>Register</Nav.Link>}
                            {loginUser ? null : <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
                            {loginUser ? <Nav.Link as={Link} to="/" onClick={() => logOut()}>LogOut</Nav.Link> : null}
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleTitleChange} />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => { handleSearch(); }}>Search</button>
                            </form>
                        </Nav>
                    </Navbar>

                    <Switch>

                        <Route exact path='/' component={Movies} />

                        <Route exact path="/register">
                            <Register success={regSuccessful} handleUserInput={(newUser: any) => { handleNewUser(newUser) }}></Register>
                        </Route>
                        <Route exact path="/login">
                            <LogIn valid={loginFailed} handleUserNamePasswordInput={(email: string, password: string) => { authentication(email, password) }}></LogIn>
                            {window ? (<Redirect to='/'></Redirect>) : null}
                        </Route>

                    </Switch>
                </Router>

            </div>

        </>

    )
}


export default NavBar;
function NoteContext(NoteContext: any): { dispatch: any; } {
    throw new Error('Function not implemented.');
}

