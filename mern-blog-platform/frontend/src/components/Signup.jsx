import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/signup', { username, email, password });
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" className="w-full p-2 border rounded" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="w-full p-2 border rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;