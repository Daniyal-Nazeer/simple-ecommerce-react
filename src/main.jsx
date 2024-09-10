import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Singlepage from './pages/Singlepage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />
      },

      {
        path: "singlepage/:id",
        element: <Singlepage />

      },
 
      {
        path: "*",
        element: <h1>Not found!</h1>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
