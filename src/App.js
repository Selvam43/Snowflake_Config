import * as UI from "@material-ui/core";
import React from "react";
import './App.css';
import Login from './login';

function App() {
  const [token, setToken] = React.useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div><h1>Dashboard</h1></div>    
  );
}

export default App;
