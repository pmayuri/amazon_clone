import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function App() {
const [{ basket }, dispatch] = useStateValue();

// USEEFFECT <<<< POWERFUL
// PIECE OF CODE WHICH RUNS BASED ON A GIVEN CONDITION

useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          // the user is logged in.....
          dispatch({
            type:"SET_USER" ,
            user: authUser,
          });
      }
      else {
    // the user is logged out...
 
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
 });



  return () => {
// any cleanup will go in here...
    unsubscribe();
};
}, []);


return (
    <Router>
      <div className="app">
         <Switch>
            <Route path="/checkout">
              <Header/>
            <Checkout />
            </Route>
            <Router path="/login">
          <Login />
            </Router>
          {/* This is the default route*/}
            <Route path="/">
              <Header/>
           <Home />
            </Route>
        </Switch>
      </div>
    </Router>
)

}

export default App;
