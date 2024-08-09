import { Button } from '../ui/button'
import { Container } from '../ui/Container'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const About = () => {
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
						<h2 className='lg:text-6xl text-5xl'>О нас</h2>
						<p className='sm:text-lg text-base'>
							Туристическая компания «Wonderful Travel» работает по направлениям
							выездного, въездного и внутреннего туризма, туркомпания имеет
							собственный потенциал и многолетний опыт туроператоров, на счету
							турфирмы более 20 поездок по зарубежным странам и туристическим
							маршрутам Узбекистана ( разработаны туристические программы), и на
							основе этого содержательно и увлекательно организуется досуг и
							путешествия местных и иностранных туристов.
						</p>
						<Button>Связь</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}
