import firstPic from '../media/first_main_content.png'
import secondPic from '../media/second_main_content.png'
import thirdPic from '../media/third_main_content.png'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landingPageStyles.css'

const LPContent = () => {
    return (
        <div>
            <div className="flex-content">
                <h1 className="firstContentText">Take control<br />over your<br /><span className="span-color">Finance</span></h1>
                <img className="firstPic" src={firstPic} alt='First Content Picture' />
            </div>
            <div className="flex-content">
                <img className="firstPic" src={secondPic} alt='First Content Picture' />
                <div className="bg-darken">
                    <h1 className="expenseText">Track your<br /><span className="span-expense">Expenses</span> now</h1>
                    <Link to={"/expense"}><button className="expenseButton">Track Now</button></Link>
                </div>
            </div>
            <div className="footer">
                <h1>Copyright - Christy Vas</h1>
            </div>
        </div>
    )
}

export default LPContent