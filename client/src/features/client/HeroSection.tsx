import type { ReactNode } from "react"
import diamondIcon from '../../assets/icons/diamond_24dp.svg'
import starIcon from '../../assets/icons/star_24dp.svg'
import timeIcon from '../../assets/icons/time_24dp.svg'
import restaurantIcon from '../../assets/icons/restaurant_24dp.svg'
import arrowRight from '../../assets/icons/arrow_right_24dp.svg'


interface HeroSectionProps {
    children: ReactNode
}

const heroFeatures = [
    {logo: restaurantIcon, title: 'Exquisite Cuisine'},
    {logo: starIcon, title: 'Elegant Atmosphere'},
    {logo: timeIcon, title: 'Open 24/7'},
    {logo: diamondIcon, title: 'Premium Service'}
]


function HeroSection({children}: HeroSectionProps) {
    return(
        <section id="home" className="w-full min-h-screen relative flex flex-col gap-10 pb-20 justify-between ">
            {children}


            <div className="px-10 flex flex-col gap-10">    

                <h2 className="text-2xl text-[var(--color-primary-dark)]">FINE DINING EXPIRIENCE</h2>

                <div className="flex flex-col gap-6  font-hero">
                    <h1 className="text-9xl">
                        Exceptional Taste,
                    </h1>

                    <h1 className="text-9xl">
                        Unforgettable <span className="text-9xl text-[var(--color-primary)]">Moments</span>
                    </h1>
                </div>

                <div>
                    <p className="text-3xl font-hero-down">
                        Reserve your table and enjoy an exquisite dining
                    </p>
                    <p className="text-3xl font-hero-down">
                        experience in our elegant restaurant
                    </p>
                </div>

                <button className="w-60 h-16 flex items-center justify-center gap-5 shrink-0 bg-[var(--color-primary)] text-[var(--color-bg)] text-xl font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer">
                    Book a Table
                    <img src={arrowRight} alt="" className="h-7 w-7" />
                </button>
            </div>

            <div className="
                ml-10 flex
                justify-between
                items-center
                w-[60%]
                gap-6
                p-8
                h-35
                rounded-2xl
                bg-white/5
                backdrop-blur-xl
            ">
                {heroFeatures.map(item => {
                  return    <div className="flex items-center gap-6">
                                <div className="
                                    h-16 w-16
                                    rounded-full
                                    flex items-center justify-center
                                    shadow-[var(--shadow-gold-inset)]
                                "><img src={item.logo} alt="" className="h-10 w10" /></div>
                                <span>{item.title}</span>
                            </div>
                })}

            </div>
        </section>
    )
}

export default HeroSection