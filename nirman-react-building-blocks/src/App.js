import React, {Fragment} from "react";
import "./App.css";
import BasicMaterialUILoginPage from "./nirman-react-login-building-blocks/basic-material-ui-login-page";

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <p>
        <h1> Login Samples </h1>
      </p>
    </div>
    <div>
      <p>
        <h3> BasicMaterialUILoginPage: </h3> 
      </p>
      <BasicMaterialUILoginPage/>
    </div>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <div>
      <p>
        <h3> MobileFriendlySocialMediaLoginPage: </h3> 
      </p>
      <BasicMaterialUILoginPage/>
    </div>
    </React.Fragment>
  );
}

export default App;
