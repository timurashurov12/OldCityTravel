import { useTranslation } from 'react-i18next'
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaTelegram,
} from 'react-icons/fa'
import logo from '../assets/oldcitytravel_logo.svg'
import { Container } from '../ui/Container'

export const Footer = () => {
	const { t } = useTranslation()
	return (
		<footer id='contact' className='py-16 bg-[#141e30] text-white'>
			<Container>
				<div className='grid w-full gap-3 sm:grid-cols-3 grid-cols-1'>
					<div className='flex flex-col sm:items-start items-center sm:text-start text-center gap-6'>
						<a to='/'>
							<img className='w-[120px] h-[120px]' src={logo} alt='logo' />
						</a>
						<p>{t('footer.title')}</p>
						<div className='flex items-center gap-3'>
							<FaTelegram className='w-[30px] h-[30px] text-[#f5b31c]' />
							<FaInstagram className='w-[30px] h-[30px] text-[#f5b31c]' />
							<FaFacebook className='w-[30px] h-[30px] text-[#f5b31c]' />
						</div>
					</div>
					<ul className='flex flex-col items-center gap-4'>
						<h3 className='text-[#f5b31c] text-xl'>Отделы</h3>
						<li>
							<a href='/'>{t('footer.home')}</a>
						</li>
						<li>
							<a href='#about'>{t('footer.about')}</a>
						</li>
						<li>
							<a href='#trip'>{t('footer.service')}</a>
						</li>
						<li>
							<a href='#services'>{t('footer.travel')}</a>
						</li>
						<li>
							<a href='#contact'>{t('footer.contact')}</a>
						</li>
					</ul>
					<ul className='flex flex-col gap-5 sm:items-end items-center text-end'>
						<h3 className='text-[#f5b31c] text-xl'>
							{t('footer.contactInfo.title')}
						</h3>
						<li className='flex items-center gap-3'>
							<FaPhoneAlt className='text-[#f5b31c]' />
							<a href='tel:+998 93-259-53-55'>+998 93-259-53-55</a>
						</li>
						<li className='flex items-center gap-3'>
							<FaPhoneAlt className='text-[#f5b31c]' />
							<a href='tel:+998 93-259-53-55'>+998 93-259-53-55</a>
						</li>
						<li className='flex items-center gap-3'>
							<FaEnvelope className='text-[#f5b31c]' />
							<a href='mailto:310199428@uztrans.uz'>310199428@uztrans.uz</a>
						</li>
						<li className='flex items-center gap-3'>
							<FaMapMarkerAlt className='text-[#f5b31c]' />
							<p className='max-w-[300px]'>{t('footer.contactInfo.map')}</p>
						</li>
					</ul>
				</div>
				<div className='flex sm:justify-end justify-center py-5 '>
					© 2024 |{' '}
					<a href='https://t.me/LittleM0ki'>{t('support')} LittleMoki</a>
				</div>
			</Container>
		</footer>
	)
}
