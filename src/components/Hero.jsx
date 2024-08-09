import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectFade } from 'swiper/modules'
import bg2 from '../assets/2986c598176097.5ed667624a051.jpg'
import bg from '../assets/58286198176097.5ed6676247b29.jpg'
import bg1 from '../assets/db55bf98176097.5ed667624cc20.jpg'
import { Button } from '../ui/button'

export const Hero = () => {
	return (
		// <section className='relative w-full h-[calc(100vh_-_136px)] overflow-hidden'>
		<section className='relative w-full h-screen overflow-hidden'>
			<div className='absolute w-full h-full z-10 text-white'>
				<div className='container px-2 mx-auto h-full'>
					<div className='max-w-[600px] flex h-full flex-col justify-center sm:items-start items-center sm:text-start text-center gap-4 '>
						<h1 className='sm:text-6xl text-4xl font-bold'>
							Путешествовать с нами весело
						</h1>
						<p className='sm:text-xl text-base'>
							Путешествуйте по миру с нашей удивительной туристической
							компанией, которая предлагает незабываемые туры и приключения по
							всему миру.
						</p>
						<Button>Зарезервировать</Button>
					</div>
				</div>
			</div>
			<Swiper
				effect={'fade'}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[EffectFade, Autoplay]}
				className='absolute top-0 left-0 w-full h-full brightness-75'
			>
				<SwiperSlide
					style={{
						backgroundImage: `url("${bg}")`,
					}}
					className='bg-cover bg-center h-full'
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url("${bg1}")`,
					}}
					className='bg-cover bg-center h-full'
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url("${bg2}")`,
					}}
					className='bg-cover bg-center h-full'
				></SwiperSlide>
			</Swiper>
			<div
				className='absolute top-0 left-0 w-full h-full z-[6]'
				style={{
					backgroundImage:
						'linear-gradient(180deg, #141E3000 30%, #141E30 100%)',
				}}
			></div>
			<div
				className='absolute top-0 left-0 w-full h-full z-[6]'
				style={{
					backgroundImage:
						'linear-gradient(360deg, #141E3000 60%, #141E30 100%)',
				}}
			></div>
		</section>
	)
}
