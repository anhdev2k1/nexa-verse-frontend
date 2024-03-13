import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

function App() {
  return <RouterProvider router={routes} fallbackElement={<p>Initial Load...</p>} />
}

export default App
