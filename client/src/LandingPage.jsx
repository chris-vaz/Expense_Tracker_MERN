import { useState } from 'react'
import './styles/landingPageStyles.css'
import Navbar from './components/Navbar'
import LPContent from './components/LPContent'


function LandingPage() {
    return (
        <div>
            <Navbar/>
            <LPContent/>
        </div>
    )
}

export default LandingPage
