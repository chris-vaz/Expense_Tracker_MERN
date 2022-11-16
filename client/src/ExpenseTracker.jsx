import { useState } from 'react'
import './App.css'
import './components/Graph'
import Graph from './components/Graph'
import Labels from './components/Labels'
import Form from './components/Form'

function ExpenseTracker() {
    const [count, setCount] = useState(0)

    return (
        <div>
        <div className="drop-shadow-1g text-gray-800">
            <h1 className="pl-7 text-2xl py-5 mb-10 bg-slate-800 text-white">Expense Tracker App</h1>

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
