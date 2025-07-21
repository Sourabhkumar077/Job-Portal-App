
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Button } from './components/ui/button'

import AppLayout from './layout/AppLayout'
import LandingPage from './pages/LandingPage'



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element:<LandingPage/>
        
      }
    ]

  }

])
function App() {
return <RouterProvider router={router}/>

}

export default App
