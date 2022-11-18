import { useState } from 'react'
import './App.css'
import './components/Graph'
import Graph from './components/Graph'
import Labels from './components/Labels'
import Form from './components/Form'
import {Link} from 'react-router-dom'

function ExpenseTracker() {
    const [count, setCount] = useState(0)

    return (
        <div>
        <div className="text-[#FFFFFF] bg-[#1D1628] drop-shadow-1g text-gray-800">
            <Link to={"/home"}><div className="ml-8 rounded-lg inline-flex mt-5 py-2 px-4 text-[#FFFFFF] bg-[#34D35E]">Back</div></Link>
            <div className="etpage">Expense Tracker Page</div>

            {/* Grid Columns */}
            <div className="grid md:grid-cols-2 gap-4">
            <div>
            {/* Chart */}
            <Graph/>
            {/* Form */}
            <Labels/>
            </div>
            <div><Form/></div>
            </div>
        </div>
        </div>
    )
}

export default ExpenseTracker
