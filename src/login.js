import React from 'react';
import './App.css';
import * as UI from "@material-ui/core";
import PropTypes from 'prop-types';


export default function Login({ setToken }) {
    const styleObj = {
        color: "WHITE",
        textAlign: "center",
    }
      const [data, setData] = React.useState(null);
      // const[text]  = React.useState(''); 
      
      React.useEffect(() => {
        fetch("/api")
          .then((res) => res.json())
          .then((data) => setData(data.message));
      }, []);
    
      async function loginUser(credentials) {
        return fetch('http://localhost:8001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
       }

       const [username, setUserName] = React.useState();
       const [password, setPassword] = React.useState();
    const handleSubmit = async e => {
        e.preventDefault();
        // const newText= { text };
        var URL = document.getElementById("URL").value;
        console.log(URL);
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }
    return(<div className="App">
    
    <header className="App-header">
    <p className="title">{!data ? "Loading...": data}</p>
    <form onSubmit={handleSubmit}>
      {/* <UI.TextField style={{margin : "10px"}} id="URL"  label="Snowflake Url" variant="outlined"/><br></br> */}
      
      <UI.TextField id="URL" label = "User Name" onChange={e => setUserName(e.target.value)}  variant="outlined" />
      <br></br>
      <UI.TextField style={{margin : "10px"}} onChange={e => setPassword(e.target.value)}  type="password" id="outlined-basics" label = "Password" variant="outlined" />
      <br></br>
      <UI.Button style={styleObj} id="Contained"  variant="contained" type="submit" label="Submit">Submit</UI.Button>
      </form>
    </header> 
    
  </div>)
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}