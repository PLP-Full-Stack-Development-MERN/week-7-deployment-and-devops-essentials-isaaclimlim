import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Blog Platform</h1>
      <p className="text-lg text-gray-600 mb-6">Discover, create, and share amazing articles with the world.</p>
      <div className="flex justify-center gap-4">
        <Link to="/signup" className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Get Started</Link>
        <Link to="/login" className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg shadow hover:bg-blue-100">Login</Link>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">How to Start Blogging</h3>
            <p className="text-gray-600">A quick guide on starting your own blog and sharing your thoughts.</p>
            <Link to="/blog/1" className="text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Benefits of Writing</h3>
            <p className="text-gray-600">Explore how writing can help you grow both personally and professionally.</p>
            <Link to="/blog/2" className="text-blue-500 hover:underline">Read more</Link>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Understanding JavaScript</h3>
            <p className="text-gray-600">Dive deep into the fundamentals of JavaScript programming.</p>
            <Link to="/blog/3" className="text-blue-500 hover:underline">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
