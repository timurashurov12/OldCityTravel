import { useTranslation } from 'react-i18next'
import {
	FaCar,
	FaHamburger,
	FaHotel,
	FaMapMarkedAlt,
	FaPassport,
	FaTicketAlt,
} from 'react-icons/fa'
import { Container } from '../ui/Container'

export const Services = () => {
	const { t } = useTranslation()
	return (
		<section id='services' className='py-32'>
			<Container>
				<div>
					<h3 className='lg:text-6xl text-5xl'>{t('services.title')}</h3>
					<div className='grid lg:grid-cols-3 grid-flow-col-1 justify-center text-3xl gap-8 pt-10'>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaMapMarkedAlt className='w-[50px] h-[50px] text-[#f5b31c]' />
							{t('services.1')}
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaPassport className='w-[50px] h-[50px] text-[#f5b31c]' />
							{t('services.2')}
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaCar className='w-[50px] h-[50px] text-[#f5b31c]' />
							{t('services.3')}
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaHamburger className='w-[50px] h-[50px] text-[#f5b31c]' />
							{t('services.4')}
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaTicketAlt className='w-[50px] h-[50px] text-[#f5b31c]' />
							{t('services.5')}
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaHotel className='w-[50px] h-[50px] text-[#f5b31c]' />
							{t('services.6')}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
