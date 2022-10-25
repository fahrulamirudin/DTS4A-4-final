import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import App from './App';
import Login from './containers/login';
import Register from './containers/register';
import Main from './pages/main';
import UserLog from './components/UserLog';
import DetailPost from './containers/DetailPost';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
  <Route path="/" element={<Main />}/>
  <Route path="/login" element={<Login />}/>
  <Route path="/register" element={<Register />}/>
  {/* <Route path="/userLog" element={<UserLog />}/> */}
    {/* <Route path="*" element={<NotFound />} /> */}
    <Route path="detail" element={<DetailPost />} />

  </Route>));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);