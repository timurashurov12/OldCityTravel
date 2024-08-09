import { Container } from '../ui/Container'
import SwipeableTemporaryDrawer from '../ui/mobileMenu'

export const Header = () => {
	return (
		<header>
			<Container>
				<div className='flex items-center py-2 justify-between'>
					<img
						className='w-[120px] h-[120px]'
						src='https://wonderfull-travel.uz/wp-content/uploads/2024/01/Wonderful-Travel-997x1024.png'
						alt='logo'
					/>
					<ul className='gap-4 text-lg lg:flex hidden'>
						<li>
							<a href='#!'>Домашняя страница</a>
						</li>
						<li>
							<a href='#!'>О нас</a>
						</li>
						<li>
							<a href='#!'>Наши сервисы</a>
						</li>
						<li>
							<a href='#!'>Путешествия</a>
						</li>
						<li>
							<a href='#!'>Коммуникация</a>
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
