import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="w-full p-2 border rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
}
export default Login;