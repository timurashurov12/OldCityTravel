import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { useState } from 'react'

export default function SwipeableTemporaryDrawer() {
	const [open, setOpen] = useState(false)

	const toggleDrawer = newOpen => () => {
		setOpen(newOpen)
	}

	const list = () => (
		<Box
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{[
					'Домашняя страница',
					'О нас',
					'Наши сервисы',
					'Путешествия',
					'Коммуникация',
				].map(text => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<div className='block lg:hidden'>
			<MenuIcon fontSize='large' onClick={toggleDrawer(true)} />
			<SwipeableDrawer
				sx={{ transform: 'translateY(136px)' }}
				anchor='top'
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				{list()}
			</SwipeableDrawer>
		</div>
	)
}
