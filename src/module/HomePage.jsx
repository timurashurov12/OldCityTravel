import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { TravelDirections } from '../components/TravelDirections'
import { Video } from '../components/Video'
import { WhyUs } from '../components/WhyUs'

export const HomePage = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<WhyUs />
				<TravelDirections />
				<Services />
				<Video />
			</main>
			<Footer />
		</>
	)
}
