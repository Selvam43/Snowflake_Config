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
    var URL = document.getElementById("URL").value;
    console.log(URL);
    fetch("/api", {
      method: "POST",
      headers: {"Content-Type": "application/JSON"},
      body: JSON.stringify(newText)
    })
    .then((res) => {
      return res.json();
  })
  .then((data) => console.log(data));
}

// window.onload=function(){
// var button = document.getElementById('Contained');
//       button.addEventListener('click', (e) => {
       
//               e.preventDefault();
//               const URL = document.querySelector('#URL').value;   
//               console.log("hello's");                
//               fetch('/', {
//                   method: 'POST',
//                   headers: {
//                       // Authorization: 'Bearer abcdxyz',
//                       'Content-Type': 'application/json',
//                   },
//                   body: JSON.stringify({
//                       URL,
//                   }),
//               })
//                   .then((res) => {
//                       return res.json();
//                   })
//                   .then((data) => console.log(data));
//           });
//         }
  return (
    <div className="App">
      <header className="App-header">
      <p className="title">{!data ? "Loading...": data}</p>
      <form onSubmit={handleSubmit}>
        <UI.TextField style={{margin : "10px"}} id="URL"  label="Snowflake Url" variant="outlined"/><br></br>
        <UI.TextField id="outlined-basics" label = "User Name" variant="outlined" />
        <br></br>
        <UI.TextField style={{margin : "10px"}} type="password" id="outlined-basics" label = "Password" variant="outlined" />
        <br></br>
        <UI.Button style={styleObj} id="Contained"  variant="contained" type="submit" label="Submit">Submit</UI.Button>
        </form>
      </header>
      
    </div>
    
  );
}

export default App;
