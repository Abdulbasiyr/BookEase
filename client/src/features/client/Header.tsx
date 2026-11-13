import { useState } from "react"
import arrowRight from '../../assets/icons/arrow_right_24dp.svg'
import logoVelora from '../../assets/logo/logo_velora.jpg'



function Header() {

    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        {id: 'home', title: 'Home'},
        {id: 'menu', title: 'Menu'},
        {id: 'reservation', title: 'Reservation'},
        {id: 'about', title: 'About'},
    ]


    return(
        <header className="w-full sticky top-0 z-50 flex items-center justify-between h-25 px-10 bg-[var(--color-bg-header)]">
            <div className="flex items-center">
                <img src={logoVelora} alt="" className="w-40 h-40"/>
                <h1 className="text-4xl font-ubuntu-bold text-[var(--color-primary-dark)]">VELORA</h1>
            </div>

            <div className="flex items-center justify-between w-1/2 gap-12">
                <nav>
                    <ul className="flex gap-18 text-xl">
                        {navItems.map(sec => {
                            return <li key={sec.id}>
                                        <a 
                                        href={`#${sec.id}`} 
                                        className={`nav-link ${activeSection === sec.id ? 'active': null}`}
                                        onClick={() => setActiveSection(sec.id)}
                                        >
                                            {sec.title}
                                        </a>
                                   </li>
                        })}
                    </ul>
                </nav>

                <button className="w-45 h-12 flex items-center justify-center gap-2 shrink-0 bg-[var(--color-primary)] text-[var(--color-bg)] text-md font-semibold rounded-[var(--radius-lg)] hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer">
                    Book a Table
                    <img src={arrowRight} alt="" />
                </button>
            </div>
        </header>
    )
}

export default Header