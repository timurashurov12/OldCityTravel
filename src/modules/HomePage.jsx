import { About } from '../components/About'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { TravelDirections } from '../components/TravelDirections'
import { Video } from '../components/Video'
import { WhyUs } from '../components/WhyUs'
import { Layout } from '../ui/Layout'
export const HomePage = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<WhyUs />
			<TravelDirections />
			<Services />
			<Video />
		</Layout>
	)
}
