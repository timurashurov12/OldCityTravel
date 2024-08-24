import { createBrowserRouter, Navigate } from 'react-router-dom'
import { HomePage } from './src/module/HomePage'
import { ProductPage } from './src/module/ProductPage'

export const router = createBrowserRouter([
	{
		path: '/:locale',
		element: <HomePage />,
	},
	{
		path: '/:locale/tour/:id',
		element: <ProductPage />,
	},
	{
		path: '*', // Catch all undefined paths
		element: <Navigate to='/ru' replace />, // Redirect to default locale (e.g., 'en')
	},
])
