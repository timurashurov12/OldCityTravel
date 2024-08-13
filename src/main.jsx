import { NextUIProvider } from '@nextui-org/react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './i18n/i18n.js'
import './index.css'
import { HomePage } from './module/HomePage.jsx'
const router = createBrowserRouter([
	{
		path: '/:locale',
		element: <HomePage />,
	},
	{
		path: '*', // Catch all undefined paths
		element: <Navigate to='/ru' replace />, // Redirect to default locale (e.g., 'en')
	},
])
createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<RouterProvider router={router} />
	</NextUIProvider>
)
