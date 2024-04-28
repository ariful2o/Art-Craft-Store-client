import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Root from './Root.jsx';
import Login from './authentication/Login.jsx';
import Register from './authentication/Register.jsx';
import AllArtCraft from './pages/AllArtCraft/AllArtCraft.jsx';
import AddArtCraft from './pages/AllArtCraft/AddArtCraft.jsx';
import MyListArtCraft from './pages/AllArtCraft/MyListArtCraft.jsx'
import ViewDetails from './pages/AllArtCraft/ViewDetails.jsx';
import UpdateArtCraft from './pages/AllArtCraft/UpdateArtCraft.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allartcraft',
        element:<AllArtCraft></AllArtCraft>,
        loader:()=>fetch('http://localhost:5000/artcrafts')
      },
      {
        path:'/allartcraft/:id',
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>fetch(`http://localhost:5000/artcraft/${params.id}`)
      },
      {
        path:'/addartcraft',
        element:<AddArtCraft></AddArtCraft>,
      },
      {
        path:'/myartcraft/:email',
        element:<MyListArtCraft></MyListArtCraft>,
        loader:({params})=>fetch(`http://localhost:5000/myartcraft/${params.email}`)

      },
      {
        path:'/myartcraft/:id',
        element:<UpdateArtCraft></UpdateArtCraft>,
        loader:({params})=>fetch(`http://localhost:5000/artcraft/${params.id}`)

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
