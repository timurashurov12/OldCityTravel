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
import { FaCalendarAlt, FaDollarSign, FaMapMarkedAlt } from 'react-icons/fa'
import { Accordion, AccordionItem } from '@nextui-org/react'

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

			<main className='py-[150px] flex lg:items-center'>
				<Container>
					<div className='grid lg:grid-cols-2 gap-3'>
						<div className='overflow-hidden rounded-lg '>
							<img
								className='w-full h-full object-cover'
								src={tourHashMap[id].image}
								alt={tourHashMap[id].title}
							/>
						</div>
						<div className='flex bg-white gap-5 py-5 rounded-lg flex-col items-center justify-between'>
							<h3 className='text-center lg:text-3xl text-xl font-semibold'>
								{/* {t('productPage.tourName')}:{' '} */}
								<span className='font-normal'>{tourHashMap[id].title}</span>
							</h3>
							<div className='grid grid-cols-3 w-full'>
								<p className='lg:text-xl flex items-center flex-col font-semibold'>
									<FaMapMarkedAlt className='text-[#F5B31C]'/>
									{t('productPage.cities')}:{' '}
									<span className='font-normal'>
										{t('travel.cities', {
											postProcess: 'interval',
											count: tourHashMap[id].days,
										})}
									</span>
								</p>
								<p className='lg:text-xl flex items-center flex-col font-semibold'>
									<FaCalendarAlt className='text-[#F5B31C]'/>
									{t('productPage.days')}:{' '}
									<span className='font-normal'>
										{t('travel.days', {
											postProcess: 'interval',
											count: tourHashMap[id].days,
										})}
									</span>
								</p>
								<p className='lg:text-xl flex items-center flex-col font-semibold'>
									<FaDollarSign className='text-[#F5B31C]'/>
									{t('productPage.price')}:{' '}
									<span className='font-normal'>{tourHashMap[id].price}$</span>
								</p>
							</div>
							<Reserve id={id} />
						</div>
					</div>
					<div className='py-5'>
						<Accordion variant='splitted'>
							<AccordionItem key="1" aria-label="День 1." startContent='День 1.' title="Прилет в столицу - Ташкент">
								
							</AccordionItem>
							<AccordionItem key="2" aria-label="День 2." startContent='День 2.' title="Исторический Ташкент - экскурсия по столице Узбекистана и переезд в Самарканд на поезде">
								
							</AccordionItem>
							<AccordionItem key="3" aria-label="День 3." startContent='День 3.' title="Знаменитые исторические места Самарканда - экскурсия по городу">
								
							</AccordionItem>
							<AccordionItem key="4" aria-label="День 4." startContent='День 4.' title="Самарканд экскурсия за город и переезд в Бухару на поезде">
								
							</AccordionItem>
							<AccordionItem key="5" aria-label="День 5." startContent='День 5.' title="Жемчужина Востока - экскурсионная история Бухары">
								
							</AccordionItem>
							<AccordionItem key="6" aria-label="День 6." startContent='День 6.' title="Бухара - экскурсионная поездка за город и переезд на авто в Хиву">
								
							</AccordionItem>
							<AccordionItem key="7" aria-label="День 7." startContent='День 7.' title="Возвращаемся домой - до новых встреч Узбекистан.">
								
							</AccordionItem>
						</Accordion>
					</div>
				</Container>
			</main>
			<Footer />
		</>
	)
}
