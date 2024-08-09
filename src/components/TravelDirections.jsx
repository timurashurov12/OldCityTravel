import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Container } from '../ui/Container'

// eslint-disable-next-line react/prop-types
const Card = ({ title, imageUrl }) => {
	return (
		<div className='w-full h-full overflow-hidden lg:rounded-none rounded-xl lg:max-h-[410px] max-h-[280px] relative'>
			<div
				className='absolute top-0 left-0 w-full h-full z-[1]'
				style={{
					backgroundImage:
						'linear-gradient(180deg, #141E3000 0%, #131D2E 100%)',
				}}
			></div>
			<img className='w-full h-full object-cover ' src={imageUrl} alt={title} />
			<div className='absolute bottom-0 left-0 p-12 z-[2]'>
				<h3 className='mb-5 sm:text-4xl lg:text-3xl text-2xl'>{title}</h3>
				<div className='flex gap-10 sm:text-lg'>
					<p className='flex flex-nowrap items-center'>
						Покупка
						<KeyboardArrowRightIcon />
					</p>
					<p className='flex flex-nowrap items-center'>
						Забронировать
						<KeyboardArrowRightIcon />
					</p>
				</div>
			</div>
		</div>
	)
}

export const TravelDirections = () => {
	// Пример данных
	const directions = [
		{
			id: 1,
			title: 'Путешествие по ОАЭ',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 2,
			title: 'Тур по Италии',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 1,
			title: 'Путешествие по ОАЭ',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 2,
			title: 'Тур по Италии',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 1,
			title: 'Путешествие по ОАЭ',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 2,
			title: 'Тур по Италии',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 1,
			title: 'Путешествие по ОАЭ',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 2,
			title: 'Тур по Италии',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 1,
			title: 'Путешествие по ОАЭ',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		{
			id: 2,
			title: 'Тур по Италии',
			imageUrl:
				'https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg',
		},
		// Добавьте еще 8 карточек
	]

	return (
		<section className='py-32'>
			<Container>
				<h2 className='sm:text-6xl text-4xl mb-5'>Направления путешествия</h2>
			</Container>
			<div className='grid lg:grid-cols-3 lg:p-0 p-5 lg:gap-0 gap-5'>
				{directions.map((direction, index) => {
					let colSpanClass = ''

					// Первый ряд: col-span-1, col-span-2
					if (index % 5 === 0) {
						colSpanClass = 'col-span-1'
					} else if (index % 5 === 1) {
						colSpanClass = 'lg:col-span-2 col-span-1'
					}
					// Второй ряд: col-span-1, col-span-1, col-span-1
					else {
						colSpanClass = 'col-span-1'
					}

					return (
						<div key={direction.id} className={colSpanClass}>
							<Card title={direction.title} imageUrl={direction.imageUrl} />
						</div>
					)
				})}
			</div>
		</section>
	)
}
