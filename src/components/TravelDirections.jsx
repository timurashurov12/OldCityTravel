import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { Reserve } from '../ui/Reserve'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

// eslint-disable-next-line react/prop-types
const Card = ({ title, imageUrl }) => {
	return (
		<div className='w-full h-full overflow-hidden lg:rounded-none rounded-xl lg:max-h-[410px] max-h-[280px] relative'>
			<div
				className='absolute top-0 left-0 w-full h-full z-[1]'
				style={{
					backgroundImage:
						'linear-gradient(180deg, #141E3000 40%, #495d0d 100%)',
				}}
			></div>
			<LazyLoadImage
				className='w-full h-full object-cover '
				src={imageUrl}
				alt={title}
				effect='blur'
			/>
			<div className='absolute bottom-0 left-0 p-12 z-[2]'>
				<h3 className='mb-5 text-white sm:text-4xl lg:text-3xl text-2xl'>
					{title}
				</h3>
				<div className='flex gap-10 sm:text-lg'>
					<Reserve />
				</div>
			</div>
		</div>
	)
}

export const TravelDirections = () => {
	const { t } = useTranslation()
	// Пример данных
	const directions = [
		{
			id: 1,
			title: t('travel.cards.1'),
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 2,
			title: t('travel.cards.2'),
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 3,
			title: t('travel.cards.3'),
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 4,
			title: t('travel.cards.4'),
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 5,
			title: t('travel.cards.5'),
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 6,
			title: t('travel.cards.6'),
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		// Добавьте еще 8 карточек
	]

	return (
		<section id='trip' className='py-32'>
			<Container>
				<h2 className='sm:text-6xl text-4xl mb-5'>{t('travel.title')}</h2>
			</Container>
			<div className='grid lg:grid-cols-3 lg:p-0 p-5 lg:gap-0 gap-5'>
				{directions.map((direction, index) => {
					return (
						<div key={index}>
							<Card title={direction.title} imageUrl={direction.imageUrl} />
						</div>
					)
				})}
			</div>
		</section>
	)
}
