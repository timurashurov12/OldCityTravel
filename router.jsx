import { createBrowserRouter, Navigate } from 'react-router-dom'
import { HomePage } from './src/module/HomePage'

export const router = createBrowserRouter([
	{
		path: '/:locale',
		element: <HomePage />,
	},
	{
		path: '/tour/:id',
		element: <h1>Card</h1>,
	},
	{
		path: '*', // Catch all undefined paths
		element: <Navigate to='/ru' replace />, // Redirect to default locale (e.g., 'en')
	},
])
