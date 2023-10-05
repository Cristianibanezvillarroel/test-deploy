import { Route, Routes } from 'react-router-dom'
import { NavbarComponents } from './components/NavbarComponents'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'



function App() {
  return (
    <>
    <NavbarComponents />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies />}/> 
    </Routes>
    </>
  )
}

export default App
