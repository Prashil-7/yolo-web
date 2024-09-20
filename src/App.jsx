/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import Github from './components/github/Github'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    { path:'/',
      element: <Layout/>,
      children:[
        {
          path:"",
        element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },

        {
          path: 'user/:userid',
          element:<User/>
        },

        {
        // loader:{ githubloader },
        path:'github',
        element:<Github/>
      },


        {
          path:"*",
          element:<h1>Not Found</h1>
        },
      
      ]
    }
  ])

  return (
    <>
    <RouterProvider   router={router}/>
    
    </>
  )
}

export default App
