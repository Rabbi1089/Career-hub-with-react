import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Statistics from './Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blog from './Blog/Blog.jsx';
import ErrorPage from './error/ErrorPage.jsx';
import JobDetails from './jobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element : <Root></Root>,
  errorElement: <ErrorPage></ErrorPage>,
  children : [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/Statistics",
      element: <Statistics></Statistics>,
    },

    {
      path: "/AppliedJobs",
      element: <AppliedJobs></AppliedJobs>,
    },

    {
      path: "/Blog",
      element: <Blog></Blog>
    },

    {
      path: "/job/:id",
      element: <JobDetails></JobDetails>,
      loader : () => fetch ('../jobs.json')
    },

  ]
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
