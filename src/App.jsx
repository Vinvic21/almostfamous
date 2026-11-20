import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import ShopTour from './components/ShopTour.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <ShopTour />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
