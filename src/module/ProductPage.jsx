import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import image_2 from '../assets/52367182924_221e4d4f49_k.jpg'
import image_1 from '../assets/52391093521_2d8708d6e0_k.jpg'
import image_4 from '../assets/53789109175_8f4371bbcb_k.jpg'
import image_3 from '../assets/53790822478_04c8ef8217_k.jpg'
import { Container } from '../ui/Container'
import { Reserve } from '../ui/Reserve'

export const ProductPage = () => {
	const { id } = useParams()
	const { t } = useTranslation()
	const tourHashMap = {
		1: {
			title: t('travel.cards.1'),
			image: image_1,
			columns: 'span 2',
			price: 999,
			days: 1,
		},
		2: {
			title: t('travel.cards.2'),
			image: image_2,
			columns: 'span 2',
			price: 999,
			days: 1,
		},
		3: {
			title: t('travel.cards.3'),
			image: image_3,
			columns: 'span 2',
			price: 999,
			days: 1,
		},
		4: {
			title: t('travel.cards.4'),
			image: image_4,
			columns: 'span 2',
			price: 999,
			days: 1,
		},
	}

	return (
		<>
			<Header />

			<main className='h-screen pt-[96px] flex lg:items-center'>
				<Container>
					<div className='grid lg:grid-cols-2 gap-3'>
						<div className='overflow-hidden rounded-lg '>
							<img
								className='w-full h-full object-cover'
								src={tourHashMap[id].image}
								alt={tourHashMap[id].title}
							/>
						</div>
						<div className='flex bg-white gap-3 lg:p-0 py-10 rounded-lg flex-col items-center justify-center'>
							<h3 className='text-center lg:text-3xl text-xl font-semibold'>
								{t('productPage.tourName')}:{' '}
								<span className='font-normal'>{tourHashMap[id].title}</span>
							</h3>
							<p className='lg:text-xl font-semibold'>
								{t('productPage.cities')}:{' '}
								<span className='font-normal'>
									{t('travel.cities', {
										postProcess: 'interval',
										count: tourHashMap[id].days,
									})}
								</span>
							</p>
							<p className='lg:text-xl font-semibold'>
								{t('productPage.days')}:{' '}
								<span className='font-normal'>
									{t('travel.days', {
										postProcess: 'interval',
										count: tourHashMap[id].days,
									})}
								</span>
							</p>
							<p className='lg:text-xl font-semibold'>
								{t('productPage.price')}:{' '}
								<span className='font-normal'>{tourHashMap[id].price}$</span>
							</p>
							<Reserve id={id} />
						</div>
					</div>
				</Container>
			</main>
			<Footer />
		</>
	)
}
