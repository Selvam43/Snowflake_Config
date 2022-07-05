import * as UI from "@material-ui/core";
import React from "react";
import './App.css';

function App() {
  const styleObj = {
    color: "WHITE",
    textAlign: "center",
}
  const [data, setData] = React.useState(null);
  const[text,setText]  = React.useState('');
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
const handleSubmit = (e) => {
    e.preventDefault();
    const newText= { text };
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/JSON"},
      body: JSON.stringify(newText)
    })
    .then((res) => {
      return res.json();
  })
  .then((data) => console.log(data));
}

window.onload=function(){
var button = document.getElementById('submit');
      button.addEventListener('click', (e) => {
       
              e.preventDefault();
              const username = document.getElementsByClassName('URL').value;   
              console.log("hello's");                
              fetch('/', {
                  method: 'POST',
                  headers: {
                      Authorization: 'Bearer abcdxyz',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      username,
                  }),
              })
                  .then((res) => {
                      return res.json();
                  })
                  .then((data) => console.log(data));
          });
        }
  return (
    <div className="App">
      <header className="App-header">
      <p className="title">{!data ? "Loading...": data}</p>
      <form onSubmit={handleSubmit}>
        <UI.TextField style={{margin : "10px"}} id="outlined-basics" className="URL" label="Snowflake Url" variant="outlined"/><br></br>
        <UI.TextField id="outlined-basics" label = "User Name" variant="outlined" />
        <br></br>
        <UI.TextField style={{margin : "10px"}} type="password" id="outlined-basics" label = "Password" variant="outlined" />
        <br></br>
        <UI.Button style={styleObj} id="Contained submit"  variant="contained" label="Submit">Submit</UI.Button>
        </form>
      </header>
      
    </div>
    
  );
}

export default App;
