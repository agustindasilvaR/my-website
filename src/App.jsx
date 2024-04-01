import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Ideas from './pages/Ideas'
import TheArtOfCreating from './blog-articles/the-art-of-creating'
import Lomography from './pages/Lomography'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
      <Route path='/ideas' element={<Ideas/>}></Route>
        <Route path='/ideas/the-art-of-creating' element={<TheArtOfCreating/>}></Route>
      <Route path='/lomography' element={<Lomography/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
