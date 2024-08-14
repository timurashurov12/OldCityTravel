import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { TravelDirections } from './components/TravelDirections'
import { WhyUs } from './components/WhyUs'

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<WhyUs />
				<TravelDirections />
				<Services />
			</main>
			<Footer />
		</>
	)
}

export default App
