
import Header from "./features/client/Header"
import HeroSection from "./features/client/HeroSection"
import MenuSection from "./features/client/MenuSection"
import AboutSection from "./features/client/AboutSection"
import Reservation from "./features/client/reservation/Reservation"


function App() {

  return (
    <div className="body">
      <HeroSection>
        <Header />
      </HeroSection>
      <MenuSection />
      <Reservation />
      <AboutSection />
    </div>
  )
}

export default App
