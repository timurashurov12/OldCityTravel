import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { Container } from '../ui/Container'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const About = () => {
	const { t } = useTranslation()

	return (
		<section id='about' className='py-32'>
			<Container>
				<div className='flex justify-between lg:flex-row flex-col-reverse sm:gap-16 gap-5'>
					<LazyLoadImage
						effect='blur'
						src='https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg'
						alt='about-page'
						className='w-[5550px] rounded-[10px]'
					/>
					<div className='flex flex-col gap-5 items-start'>
						<h2 className='lg:text-6xl text-5xl'>{t('about.title')}</h2>
						<p className='sm:text-lg text-base'>{t('about.subtitle')}</p>
						<Button>{t('button')}</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}
