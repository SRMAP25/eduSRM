import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Admin/Layout";
// import Dashboard from "./Admin/Dashboard";
import CourseView from "./Admin/CourseView";
import EditCourses from "./Admin/EditCourses";
import Login from "./Admin/Login";
import EditTopics from "./Admin/EditTopics";
import HeroSection from "./Pages/HeroSection";
import SignUp from "./Pages/SignUp";
import EditUsers from "./Admin/EditUsers";
import AddCoursePage from "./Admin/admin_pages/add_new_course";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeroSection />,
    },
    {
      path: "/admin/login",
      element: <Login />,
    },
    {
      path: "/user/login",
      element: <SignUp />,
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <AddCoursePage />,
        },
        {
          path: "/admin/courses",
          element: <CourseView />,
        },
        {
          path: "/admin/edit-courses",
          element: <EditCourses />,
        },
        {
          path: "/admin/edit-topics",
          element: <EditTopics />,
        },
        {
          path: "/admin/users",
          element: <EditUsers />,
        },
      ],
    },
    {
      path: "/user",
      element: <Layout />,
      children: [
        {
          path: "/user/dashboard",
          element: <AddCoursePage />,
        },
        {
          path: "/user/courses",
          element: <CourseView />,
        },
        
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
