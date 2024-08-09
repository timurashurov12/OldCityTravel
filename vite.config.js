// vite.config.js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules/react')) {
						return 'vendor-react'
					}
					if (id.includes('node_modules/lodash')) {
						return 'vendor-lodash'
					}
					// You can add more manual chunking logic here
				},
			},
		},
	},
})
