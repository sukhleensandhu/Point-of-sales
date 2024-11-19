import  { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4300/login', {username,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };
  
    return (
      
        <div>
          <div  className="product">
          <h1 className="App-header ">LOGIN</h1>
    <form onSubmit={handleSubmit}>
      <div className='mb-8'>
      <input className='input'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required/></div>
        <div>
      <input className='input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/></div>
     <div>
      <button className=" button" type="submit">Login</button></div>
    </form>
    <Link className=" button" to="/forgot-password">Forgot Password?</Link>
    <br />
    <Link className=" button" to="/signup">Do not have an account? Sign up</Link>
    </div>
  </div>
  
  
    );
  }
  
  export default Login;
  
  