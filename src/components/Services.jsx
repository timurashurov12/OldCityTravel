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
	return (
		<section className='py-32'>
			<Container>
				<div>
					<h3 className='lg:text-6xl text-5xl'>Наши услуги</h3>
					<div className='grid lg:grid-cols-3 grid-flow-col-1 justify-center text-3xl gap-8 pt-10'>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaMapMarkedAlt className='w-[50px] h-[50px] text-[#4CA1F2]' />
							Организация поездок
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaPassport className='w-[50px] h-[50px] text-[#4CA1F2]' />
							Визовая помощь
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaCar className='w-[50px] h-[50px] text-[#4CA1F2]' />
							Прокат автомобилей
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaHamburger className='w-[50px] h-[50px] text-[#4CA1F2]' />
							Организация питания
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaTicketAlt className='w-[50px] h-[50px] text-[#4CA1F2]' />
							Покупка авиабилета
						</div>
						<div className='flex items-center gap-2 lg:flex-row flex-col'>
							<FaHotel className='w-[50px] h-[50px] text-[#4CA1F2]' />
							Гостиничный сервис
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
