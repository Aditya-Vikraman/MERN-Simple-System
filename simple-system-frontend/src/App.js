import HomePage from './pages/HomePage.js';
import InfoPage from './pages/InfoPage.js';
import ErrorPage from './pages/ErrorPage.js';
import BuildPage from './pages/BuildPage.js';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "info",
    element:  <InfoPage/>,
  },
  {
    path: "build",
    element: <BuildPage/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
