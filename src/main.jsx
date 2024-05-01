import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './authentication/Login.jsx';
import Register from './authentication/Register.jsx';
import './index.css';
import AddArtCraft from './pages/AllArtCraft/AddArtCraft.jsx';
import AllArtCraft from './pages/AllArtCraft/AllArtCraft.jsx';
import MyListArtCraft from './pages/AllArtCraft/MyListArtCraft.jsx';
import UpdateArtCraft from './pages/AllArtCraft/UpdateArtCraft.jsx';
import ViewDetails from './pages/AllArtCraft/ViewDetails.jsx';
import Blogs from './pages/Blogs.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';
import PrivateRoute from './Privates/PrivateRoute.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Root from './Root.jsx';

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
        loader:()=>fetch('https://art-craft-store-server-three.vercel.app/artcrafts')
      },
      {
        path:'/allartcraft/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://art-craft-store-server-three.vercel.app/artcraft/${params.id}`)
      },
      {
        path:'/addartcraft',
        element:<PrivateRoute><AddArtCraft></AddArtCraft></PrivateRoute>,
      },
      {
        path:'/myartcraft/:email',
        element:<PrivateRoute><MyListArtCraft></MyListArtCraft></PrivateRoute>,
        loader:({params})=>fetch(`https://art-craft-store-server-three.vercel.app/myartcraft/${params.email}`)

      },
      {
        path:'/updateartcraft/:id',
        element:<PrivateRoute><UpdateArtCraft></UpdateArtCraft></PrivateRoute>,
        loader:({params})=>fetch(`https://art-craft-store-server-three.vercel.app/artcraft/${params.id}`)

      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>,
        loader:()=>fetch('https://art-craft-store-server-three.vercel.app/blogs')
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
