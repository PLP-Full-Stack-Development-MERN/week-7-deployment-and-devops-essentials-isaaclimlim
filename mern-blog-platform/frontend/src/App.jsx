
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import Blog from '../src/pages/Blog.jsx';
import CreateBlog from '../src/pages/Createblog.jsx';
import Login from '../src/components/Login.jsx';
import Signup from '../src/components/Signup.jsx';
import Dashboard from '../src/pages/Dashboard.jsx';

function App() {
  return (
    <div className="container mx-auto p-4">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    
    </div>
  );
}
export default App;