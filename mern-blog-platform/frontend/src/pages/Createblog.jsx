import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/blogs', { title, content }, {
        headers: { Authorization: localStorage.getItem('token') }
      });
      navigate('/blogs');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" className="w-full p-2 border rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea className="w-full p-2 border rounded" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit" className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}
export default CreateBlog;