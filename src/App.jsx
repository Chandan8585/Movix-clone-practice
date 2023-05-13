
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import PageNotFound from './pages/PageNotFound'
import SearchResults from './pages/search/SearchResults'
import Details from './pages/details/Details'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import { useEffect } from 'react'

function App() {
  useEffect(()=> {
     apitesting()
  }, [])
  const apitesting = ()=> {
       
  }
  return (
    <div>
   <BrowserRouter> 
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/:mediaType/:id' element={<Details/>}/>
  <Route path='/expore/:mediaType' element={<Explore/>} />
  <Route path='/*' element={<PageNotFound/>} />
  <Route path='/search/:query' element={<SearchResults/>} />
</Routes>
<Footer/>
</BrowserRouter>  
    </div>
  )
}

export default App
