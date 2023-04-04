import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
// import ErrorPage from "./error-page";
// import About from "./pages/About";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />,
//     },
//     {
//         path: "about",
//         element: <About />,
//
//     },
// ]);
//
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );