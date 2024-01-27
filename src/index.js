import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import components
import App from './App';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
// import routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Navbar  from './Components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Registration",
    element: <Signup />,
  },
  {
    path: "/SignIn",
    element: <Login />,
  },
  {
    path: "/Settings",
    element: "",
  },
  {
    path: "/Account",
    element: "",
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
