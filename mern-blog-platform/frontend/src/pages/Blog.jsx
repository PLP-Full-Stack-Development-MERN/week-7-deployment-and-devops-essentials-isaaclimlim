import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog._id} className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-600">{blog.content.substring(0, 100)}...</p>
            <p className="text-sm text-gray-500">By {blog.author.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blog;