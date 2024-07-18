import { useRoutes } from 'react-router-dom'
import Main from './pages/Main'
import NotFound from './pages/NotFound/NotFound'
import RepositoryPage from './pages/RepositoryPage'

const App = () => {
	const pages = useRoutes([
		{
			path: '/',
			element: <Main />,
		},
		{
			path: '/:name',
			element: <RepositoryPage />,
		},
		{
			path: '*',
			element: <NotFound />,
		},
	])

	return (
		<>
			<main>{pages}</main>
		</>
	)
}

export default App
