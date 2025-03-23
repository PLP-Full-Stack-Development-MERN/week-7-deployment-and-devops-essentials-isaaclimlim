import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/blogs', {
          headers: { Authorization: token },
        });
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog._id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Dashboard;
