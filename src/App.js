import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Signup from './Signup.js';
import Login from './Login';
import { useState } from 'react';
import Search from './Search';

function App() {
  var [user,setUser] = useState();

  function LoginDone(customer_data) {
    setUser(customer_data);
    //alert("Login Component Called ");
  }

  return (
    <div className="App">
      <Navbar customerdetail={user} />
      <Login informlogin={LoginDone}/>
      <Search/>
      <Signup/>
      <Home/>
    </div>
  );
}

export default App;
