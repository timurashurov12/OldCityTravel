import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'

import 'react-lazy-load-image-component/src/effects/blur.css'
import CustomTitle from '../ui/CustomTitle.jsx'

import image_2 from '../assets/52367182924_221e4d4f49_k.jpg'
import image_1 from '../assets/52391093521_2d8708d6e0_k.jpg'
import image_4 from '../assets/53789109175_8f4371bbcb_k.jpg'
import image_3 from '../assets/53790822478_04c8ef8217_k.jpg'
import { Card } from '../ui/Card.jsx'

export const TravelDirections = () => {
	const { t } = useTranslation()
	const directions = [
		{
			id: 5,
			title: t('travel.cards.5'),
			image: image_1,
			columns: 'span 2',
			price: 2180,
			days: 7,
		},
		{
			id: 2,
			title: t('travel.cards.2'),
			image: image_2,
			price: 999,
			days: 1,
		},
		{
			id: 3,
			title: t('travel.cards.3'),
			image: image_3,
			price: 120,
			days: 1,
		},
		
		{
			id: 4,
			title: t('travel.cards.4'),
			image: image_4,
			price: 999,
			days: 1,
		},
		{
			id: 1,
			title: t('travel.cards.1'),
			image: image_1,
			price: 999,
			days: 1,
		},
	]

	return (
		<section id='trip'>
			<Container>
				<CustomTitle
					tag='h2'
					text='travel.title'
					className={'text-center mb-14'}
				/>
				<div className='grid lg:grid-cols-3 lg:gap-10 grid-cols-2 gap-5'>
					{directions.map((direction, index) => (
						<Card key={index} direction={direction} />
					))}
				</div>
			</Container>
		</section>
	)
}
