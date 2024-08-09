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
					{ text: 'Домашняя страница', link: '/' },
					{ text: 'О нас', link: '/#about' },
					{ text: 'Наши сервисы', link: '/#services' },
					{ text: 'Путешествия', link: '/#trip' },
					{ text: 'Коммуникация', link: '/#contact' },
				].map(item => (
					<ListItem key={item.text} disablePadding>
						<ListItemButton component='a' href={item.link}>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
				<div className='flex gap-3 justify-start p-3'>
					<img
						src='https://wonderfull-travel.uz/wp-content/plugins/gtranslate/flags/32/en-us.png'
						alt='usa'
					/>
					<img
						src='https://wonderfull-travel.uz/wp-content/plugins/gtranslate/flags/32/ru.png'
						alt='russian'
					/>
					<img
						src='https://wonderfull-travel.uz/wp-content/plugins/gtranslate/flags/32/uz.png'
						alt='uzbekistan'
					/>
				</div>
			</List>
		</Box>
	)

	return (
		<div className='block lg:hidden'>
			<MenuIcon
				sx={{ color: 'white' }}
				fontSize='large'
				onClick={toggleDrawer(true)}
			/>
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
