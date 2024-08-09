import { createBrowserRouter } from 'react-router-dom'
import { CardInfo } from './modules/CardInfo'
import { HomePage } from './modules/HomePage'
import { OrderPage } from './modules/OrderPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/order/:id',
		element: <OrderPage />,
	},
	{
		path: '/product/:id',
		element: <CardInfo />,
	},
])
