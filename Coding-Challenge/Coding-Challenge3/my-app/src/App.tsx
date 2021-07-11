import { Route, Link, HashRouter } from "react-router-dom";
import Home from "./component/home";
import QuestionList from "./component/QuestionList";
import { AddQuestion } from "./component/AddQuestion";
import QuestionDetails from "./component/QuestionDetails";
import { useState, useEffect } from "react";
import "./App.css";
import Register from "./component/registration";
import Login from "./component/login";
import SimpleMenu from "./component/menu";

function App() {
  const [user, setUser] = useState(false);
  const [firstLetter, setFirstLetter] = useState("");
  const [loginFailed, setLoginFailed] = useState("");
  let nameArray = [];

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setUser(true);
    }
  }, []);

  const logOut = async () => {
    setUser(false);
    localStorage.clear();
  };

  const authentication = async (userName: string, password: string) => {
    nameArray = userName.split("");
    console.log(userName, password);
    setFirstLetter(nameArray[0]);

    let auth = await fetch("http://localhost:8000/api/user/login", {
      method: "POST",
      body: JSON.stringify({ userName: userName, password: password }),
      headers: { "content-type": "application/json" },
    });
    let valid = await auth.json();
    console.log(valid);
    if (valid === 401) {
      setUser(false);
      setLoginFailed("failed");
    } else {
      localStorage.setItem("login", valid);
      setUser(true);
      setLoginFailed("success");
    }
  };
  const handleNewUser = async (newUser: any) => {
    console.log("reg");
    await fetch("http://localhost:8000/api/user/registration", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });
    console.log("reg2");
  };
  return (
    <HashRouter>
      <div>
        <h1>Questions And Answers</h1>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/questions" >Questions</Link>
          </li>
          <li>
            {user ? <Link to="/addquestions" >Add Questions</Link> : null}
          </li>
          <li>{user ? null : <Link to="/register">Register</Link>}</li>
          <li>{user ? null : <Link to="/login">Login</Link>}</li>


          <li>
            {user ? (
              <SimpleMenu firstLetter={firstLetter} logOut={logOut} />
            ) : null}

          </li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/questions" component={QuestionList}></Route>
        <Route exact path="/addquestions" component={AddQuestion}></Route>
        <Route exact path="/details/:id?" component={QuestionDetails}></Route>
        <Route exact path="/register">
          <Register
            handleregistration={(newUser: any) => {
              handleNewUser(newUser);
            }}
          ></Register>
        </Route>
        <Route exact path="/login">
          <Login
            valid={loginFailed}
            handlelogin={(username: string, password: string) => {
              authentication(username, password);
            }}
          ></Login>
        </Route>
      </div>
    </HashRouter>
  );
}
export default App;
