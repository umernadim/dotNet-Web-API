import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx';
import ViewProduct from './ViewProduct.jsx';
import AddProduct from './AddProduct.jsx';
import UpdateProduct from './UpdateProduct.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        index: true,
        Component: ViewProduct
      },
      {
        path: '/AddProduct',
        Component: AddProduct
      },
      {
        path: '/UpdateProduct/:id',
        Component: UpdateProduct
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
