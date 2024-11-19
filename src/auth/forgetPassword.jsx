import  { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    axios.post('http://localhost:4300/forgot-password', {email})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <div className='product'>
  <h1 className="App-header ">FORGOT PASSWORD</h1>
      <form onSubmit={handleSubmit}>
        <input className='input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className='button' type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
