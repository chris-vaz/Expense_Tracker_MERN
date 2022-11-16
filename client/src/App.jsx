import './App.css'
import './components/Graph'
import ExpenseTracker from './ExpenseTracker'
import LandingPage from './LandingPage'
import { Routes,Route, Navigate } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to='/home' replace />}/>
      <Route element={<ExpenseTracker/>} path="/expense"/>
      <Route element={<LandingPage/>} path="/home"/>
      </Routes>
      {/* <ExpenseTracker/> */}
    </div>
  )
}

export default App
