# Personal Blog Platform

## Project Overview

The **Personal Blog Platform** is a web application that allows users to create, edit, and publish blog posts. The project is built with **React.js (Vite) and TailwindCSS** for the frontend, and **Node.js with Express** for the backend. The database is managed using **MongoDB**. The application also integrates CI/CD pipelines and monitoring tools for seamless deployment and maintenance.

---

## Installation & Deployment

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (v18 or later)
- **MongoDB** (Local or Cloud Instance)
- **Git**

### **Backend Setup**

1. Clone the repository:
   ```sh
   git clone https://github.com/PLP-Full-Stack-Development-MERN/week-7-deployment-and-devops-essentials-isaaclimlim/tree/main
   cd week-7-deployment-and-devops-essentials-isaaclimlim
   ```
2. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Create a `.env` file in the backend folder and add:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### **Frontend Setup**

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install frontend dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```

Now, visit `http://localhost:5173` to access the blog platform.

---

## CI/CD Pipeline Setup

The project includes **GitHub Actions** for continuous integration and deployment:

- **On every push/pull request**, tests are run using **Jest**.
- **On merging to ****`main`**, the app is deployed to **Render**.

### **GitHub Actions Workflow**

Located in `.github/workflows/ci.yml`, this workflow:

1. **Runs tests** using Jest.
2. **Deploys to Render** on successful test completion.
3. **Notifies Slack** if a build fails.

---

## Monitoring & Security Measures

### **Logging & Error Handling**

- **Winston & Morgan** are used for backend request logging.
- **Sentry** is integrated for frontend error tracking.

### **Security Best Practices**

- **JWT Authentication** secures user sessions.
- **Environment variables** are used for sensitive data.
- **Rate Limiting** is implemented to prevent API abuse.

---

## Future Enhancements

- **Docker Support** for containerized deployment.
- **Role-based access control (RBAC)** for better security.
- **Better analytics dashboard** for blog engagement tracking.

