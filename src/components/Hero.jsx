import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Button } from '../ui/button'

export const Hero = () => {
	return (
		<section className='relative w-full h-[calc(100vh_-_136px)] overflow-hidden'>
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
				className='absolute top-0 left-0 w-full h-full'
			>
				<SwiperSlide
					style={{
						backgroundImage:
							'url("https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg")',
					}}
					className='bg-cover bg-center h-full'
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							'url("https://i.pinimg.com/originals/ba/8a/7f/ba8a7f465eaafea74a481ace8bd579e2.jpg")',
					}}
					className='bg-cover bg-center h-full'
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage:
							'url("https://wallpapercat.com/w/full/4/a/b/17638-3840x2160-desktop-4k-forest-background.jpg")',
					}}
					className='bg-cover bg-center h-full'
				></SwiperSlide>
			</Swiper>
			<div
				className='absolute top-0 left-0 w-full h-full z-[6]'
				style={{
					backgroundImage:
						'linear-gradient(180deg, #141E3000 0%, #131D2E 100%)',
				}}
			></div>
		</section>
	)
}
