import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import Home from './components/Home';
import Orderpage from './components/Orderpage';
import Thankyoupage from './components/Thankyoupage';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orderpage" element={<Orderpage />} />
        <Route path="/thankyoupage" element={<Thankyoupage />} />
        </>
      
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
