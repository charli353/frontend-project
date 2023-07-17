import { Routes, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Home from './components/Home'

export const defaultURL = axios.create({
  baseURL : 'https://nc-news-production.onrender.com/api'
})

function App() {
return (
  <Routes>
    <Route path='/' element={<Home /> } />
  </Routes>
  )
}
export default App
