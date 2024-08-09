import { NextUIProvider } from '@nextui-org/react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n/i18n.js'

createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<App />
	</NextUIProvider>
)
