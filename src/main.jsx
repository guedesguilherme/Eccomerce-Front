import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"
import './index.css'

//import páginas
import Home from './routes/Home.jsx';
import Products from './routes/Products.jsx';
import Customers from './routes/Customers.jsx';

//import métodos do cliente
import PostCustomer from './routes/CustomerMethods/PostCustomer.jsx';
//import DeleteCustomer from './routes/CustomerMethods/DeleteCustomer.jsx';
import PutCustomer from './routes/CustomerMethods/PutCustomer.jsx';

//importando métodos do produto
import PostProduct from './routes/ProductMethods/PostProduct.jsx'
import PutProdutct from './routes/ProductMethods/PutProdutct.jsx'


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [

      //caminho para a home
      {
        path: "/",
        element: <Home/>
      },

      //caminhos para o cliente
      {
        path: "/cliente",
        element: <Customers/>
      },
      {
        path: "/cliente/post",
        element: <PostCustomer/>
      },
      {
        path: "/cliente/put/:id",
        element: <PutCustomer/>
      },

      //Caminhos do produto
      {
        path: "/produto",
        element: <Products/>
      },
      {
        path: "/produto/post",
        element: <PostProduct/>
      },
      {
        path: "/produto/put/:id",
        element: <PutProdutct/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
