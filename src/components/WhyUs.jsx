import { Checkbox, CheckboxGroup } from '@nextui-org/react'
import { Button } from '../ui/button'
import { Container } from '../ui/Container'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const WhyUs = () => {
	return (
		<section className='py-32'>
			<Container>
				<div className='flex justify-between lg:flex-row flex-col gap-7'>
					<div className='flex flex-col gap-5 items-start max-w-[550px]'>
						<h2 className='sm:text-6xl text-5xl'>Почему мы?</h2>
						<p className='sm:text-xl'>
							Почему мы? В целях организации содержательного и приятного отдыха
							туристов проводится качественная организация групповых и
							самостоятельных поездок. Агентство имеет собственных потенциальных
							туроператоров и агентство разработало около 70 туристических
							маршрутов для путешествий по стране.
						</p>
						<CheckboxGroup
							orientation='vertical'
							isReadOnly={true}
							defaultValue={[
								'Полное сотрудничество',
								'Безопасные путешествия',
								'Лучшие курорты',
							]}
						>
							<Checkbox value='Полное сотрудничество'>
								<p className='text-lg'>Полное сотрудничество</p>
							</Checkbox>
							<Checkbox value='Безопасные путешествия'>
								<p className='text-lg'>Безопасные путешествия</p>
							</Checkbox>
							<Checkbox value='Лучшие курорты'>
								<p className='text-lg'>Лучшие курорты</p>
							</Checkbox>
						</CheckboxGroup>
						<Button>Связь</Button>
					</div>
					<div className='lg:max-w-[750px] relative'>
						<LazyLoadImage
							effect='blur'
							src='https://wallpapers.com/images/featured/4k-forest-7sfd6znw2ry6hnlt.jpg'
							alt='about-page'
							className='w-[5550px] rounded-[10px]'
						/>
						<div className='absolute bg-white right-[30px] bottom-[30px] text-center px-5 rounded-lg'>
							<p className='text-4xl font-semibold text-[#141e30]'>350+</p>
							<p className='text-xl text-[#141e30]'>Счастливые клиенты</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
