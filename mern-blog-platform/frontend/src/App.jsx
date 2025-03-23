
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import Blog from '../src/pages/Blog.jsx';
import CreateBlog from '../src/pages/Createblog.jsx';
import Login from '../src/components/Login.jsx';
import Signup from '../src/components/Signup.jsx';
import Dashboard from '../src/pages/Dashboard.jsx';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://your_sentry_dsn_here",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

function App() {
  return (
 <Sentry.ErrorBoundary fallback={<p>An error has occurred.</p>}>
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
  </Sentry.ErrorBoundary>
  );
}
export default App;
