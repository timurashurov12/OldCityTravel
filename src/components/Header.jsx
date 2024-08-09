import { useEffect, useState } from 'react'
import logo from '../assets/oldcitytravel_logo.svg'
import { Container } from '../ui/Container'
import SwipeableTemporaryDrawer from '../ui/mobileMenu'

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isHomePage, setIsHomePage] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		const handleLocationChange = () => {
			setIsHomePage(window.location.href === 'http://localhost:5173/')
		}

		handleLocationChange() // Set initial state

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('popstate', handleLocationChange) // Handle back/forward navigation

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('popstate', handleLocationChange)
		}
	}, [])

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
				isScrolled || !isHomePage ? 'bg-[#141e30]' : 'bg-transparent'
			}`}
		>
			<Container>
				<div className='flex items-center py-2 justify-between'>
					<a to='/'>
						<img className='w-[120px] h-[120px]' src={logo} alt='logo' />
					</a>
					<ul className={`gap-4 text-xl lg:flex hidden text-white`}>
						<li>
							<a href='/'>Домашняя страница</a>
						</li>
						<li>
							<a href='/#about'>О нас</a>
						</li>
						<li>
							<a href='/#services'>Наши сервисы</a>
						</li>
						<li>
							<a href='/#trip'>Путешествия</a>
						</li>
						<li>
							<a href='/#contact'>Коммуникация</a>
						</li>
					</ul>
					<div className='lg:flex gap-2 hidden'>
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
					<SwipeableTemporaryDrawer />
				</div>
			</Container>
		</header>
	)
}
