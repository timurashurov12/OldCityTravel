import {Swiper, SwiperSlide} from 'swiper/react'

import {useTranslation} from 'react-i18next'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Autoplay, EffectFade} from 'swiper/modules'
import bg2 from '../assets/2986c598176097.5ed667624a051.jpg'
import bg from '../assets/58286198176097.5ed6676247b29.webp'
import bg1 from '../assets/db55bf98176097.5ed667624cc20.webp'
import {Button} from '../ui/button'

export const Hero = () => {
    const {t} = useTranslation()
    return (
        // <section className='relative w-full h-[calc(100vh_-_136px)] overflow-hidden'>
        <section className='relative w-full h-screen'>
            <div className='absolute w-full h-full z-10 text-white'>
                <div className='container px-2 mx-auto h-full'>
                    <div
                        className='max-w-[600px] flex h-full flex-col justify-center sm:items-start items-center sm:text-start text-center gap-4 '>
                        <h1 className='sm:text-6xl text-4xl font-bold'>
                            {t('hero.title')}
                        </h1>
                        <p className='sm:text-xl text-base'>{t('hero.subtitle')}</p>
                        <div className="flex gap-5">
                            <Button className={"bg-green-600 border-green-600"}> {t('hero.button_1')}</Button>
                            <Button> {t('hero.button_2')}</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
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
