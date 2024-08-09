import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaTelegram,
} from 'react-icons/fa'
import { Container } from '../ui/Container'

export const Footer = () => {
	return (
		<section className='py-16 text-white'>
			<Container>
				<div className='grid w-full gap-3 sm:grid-cols-3 grid-cols-1'>
					<div className='flex flex-col sm:items-start items-center sm:text-start text-center gap-6'>
						<img
							className='w-[150px] h-[150px]'
							src='https://wonderfull-travel.uz/wp-content/uploads/2024/01/Wonderful-Travel-997x1024.png'
							alt='logo'
						/>
						<p>
							Путешествуйте по миру с нашей удивительной туристической
							компанией, которая предлагает незабываемые туры и приключения по
							всему миру.
						</p>
						<div className='flex items-center gap-3'>
							<FaTelegram className='w-[30px] h-[30px] text-[#4CA1F2]' />
							<FaInstagram className='w-[30px] h-[30px] text-[#4CA1F2]' />
							<FaFacebook className='w-[30px] h-[30px] text-[#4CA1F2]' />
						</div>
					</div>
					<ul className='flex flex-col items-center gap-4'>
						<h3 className='text-[#4CA1F2] text-xl'>Отделы</h3>
						<li>
							<a href='#!'>Домашняя страница</a>
						</li>
						<li>
							<a href='#!'>О нас</a>
						</li>
						<li>
							<a href='#!'>Путешествия</a>
						</li>
						<li>
							<a href='#!'>Услуги</a>
						</li>
						<li>
							<a href='#!'>Коммуникация</a>
						</li>
					</ul>
					<ul className='flex flex-col gap-5 sm:items-end items-center text-end'>
						<h3 className='text-[#4CA1F2] text-xl'>Связь</h3>
						<li className='flex items-center gap-3'>
							<FaPhoneAlt className='text-[#4CA1F2]' />
							<a href='tel:+998 93-259-53-55'>+998 93-259-53-55</a>
						</li>
						<li className='flex items-center gap-3'>
							<FaPhoneAlt className='text-[#4CA1F2]' />
							<a href='tel:+998 93-259-53-55'>+998 93-259-53-55</a>
						</li>
						<li className='flex items-center gap-3'>
							<FaEnvelope className='text-[#4CA1F2]' />
							<a href='mailto:310199428@uztrans.uz'>310199428@uztrans.uz</a>
						</li>
						<li className='flex items-center gap-3'>
							<FaMapMarkerAlt className='text-[#4CA1F2]' />
							<p className='max-w-[300px]'>
								Бухарская область, Бухарский район, МФУ Ойбека, улица Буюк Ипак
								ёли, 64
							</p>
						</li>
					</ul>
				</div>
				<div className='flex sm:justify-end justify-center py-5 '>
					© 2024 |{' '}
					<a href='https://t.me/LittleM0ki'>При поддержке LittleMoki</a>
				</div>
			</Container>
		</section>
	)
}
