import axios from 'axios';
import  { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:4300/signup', {username,password,email})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <div className='product'>
      <h1 className="App-header ">SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <input className='input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input className='input'
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className='input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='button' type="submit">Sign Up</button>
      </form>
      </div>
  );
}

export default Signup;


