import { useEffect, useState } from 'react'
import logo from '../assets/oldcitytravel_logo.svg'
import { Container } from '../ui/Container'
import SwipeableTemporaryDrawer from '../ui/mobileMenu'

import { useTranslation } from 'react-i18next'

export const Header = () => {
	const { i18n } = useTranslation()
	const changeLanguage = language => {
		i18n.changeLanguage(language)
	}

	// console.log(document.body.style.overflow = 'hidden')
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
				isScrolled ? 'bg-[#141e30]' : 'bg-transparent'
			}`}
		>
			<Container>
				<div className='flex items-center py-2 justify-between'>
					<img className='w-[120px] h-[120px]' src={logo} alt='logo' />
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
							onClick={() => changeLanguage('en')}
							src='https://wonderfull-travel.uz/wp-content/plugins/gtranslate/flags/32/en-us.png'
							alt='usa'
						/>
						<img
							onClick={() => changeLanguage('ru')}
							src='https://wonderfull-travel.uz/wp-content/plugins/gtranslate/flags/32/ru.png'
							alt='russian'
						/>
						<img
							onClick={() => changeLanguage('uz')}
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
