import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import NotFoundPage from './pages/NotFoundPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AddNotePage from './pages/DetailNotePage/AddNotePage.jsx';
import DetailNotePage from './pages/DetailNotePage/DetailNotePage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "add-note",
    element: <AddNotePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "note",
    element: <DetailNotePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "note/:id",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
