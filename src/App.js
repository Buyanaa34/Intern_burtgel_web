import "./App.css";
// import Login from "./components/SignUp_Login/Login";
// import Sign_up from "./components/SignUp_Login/SignUp";
// import Big_Holder from "./components/big_contents/content_holder/Big_holder";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/big_contents/sidebar/Sidebar";
import Holder from "./components/big_contents/content_holder/holder/Holder";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Big_Holder}></Route>
          <Route path="/sign_up" component={Sign_up}></Route>
        </Switch> */}
        <Sidebar></Sidebar>
        <Holder></Holder>
      </div>
    </BrowserRouter>
  );
}

export default App;
