import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import useGetMe from '~/hooks/useGetMe'
import { useQuery } from '@tanstack/react-query'
function App() {
  const getMeFn = useGetMe()
  useQuery({
    queryKey: ['currentUser'],
    queryFn: getMeFn,
    staleTime: 30000
  })
  return <RouterProvider router={routes} fallbackElement={<p>Initial Load...</p>} />
}

export default App
