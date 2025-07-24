
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
// import { Button } from './components/ui/button'

import AppLayout from './layout/AppLayout'
import LandingPage from './pages/LandingPage'
import OnBoarding from './pages/OnBoarding'
import JobListings from './pages/JobListings'
import JobDetails from './pages/JobDetails'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />

      },
      {
        path: "/onboarding",
        element: <OnBoarding />
      }
      ,
      {
        path: "/jobs",
        element: <JobListings />
      },
      {
        path: '/jobs/:id',
        element: <JobDetails />
      },
      {
        path: '/post-job',
        element: <PostJob />
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />

      },
      {
        path: '/my-jobs',
        element: <MyJobs />
      }
    ]

  }

])
function App() {
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>

}

export default App
