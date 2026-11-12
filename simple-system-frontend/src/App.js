import HomePage from './pages/HomePage.js';
import InfoPage from './pages/InfoPage.js';
import ErrorPage from './pages/ErrorPage.js';
import BuildPage from './pages/BuildPage.js';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Anytime your app throws an error while rendering, loading data, or performing data mutations, React Router will catch it and render a default error screen. However we can create our own error page.

// the error page must be set as errorElement on the root route.

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
