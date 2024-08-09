import { Container } from '../ui/Container'

export const Video = () => {
	return (
		<section className='pt-32'>
			<Container>
				<div className='w-full'>
					<iframe
						className='w-full h-[730px]'
						title='Youtube player'
						sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
						src={`https://youtube.com/embed/vQVwkyn3-F8?autoplay=0`}
					></iframe>
					<iframe
						src='https://yandex.ru/map-widget/v1/?lang=en_FR&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3Aa586f339e0ba01fbc9fb7bac1d740f30288e85593d7d87aff3506c6586f011ce'
						className='pt-32 w-full h-[400px]'
					></iframe>
				</div>
			</Container>
		</section>
	)
}
