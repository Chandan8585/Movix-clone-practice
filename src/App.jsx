
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
  // useEffect(()=> {
  //    apitesting()
  // }, [])
  // const apitesting = ()=> {
  //       fetch("https://api.themoviedb.org/3/movie/550?api_key=821acf172e6be981ab5d87f9c4b97ddd")
  //                .then(res=>res.json())
  //                .then(data=> console.log(data));  
  // }
  return (
    <div>
   <BrowserRouter> 
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/:mediaType/:id' element={<Details/>}/>
  <Route path='/explore/:mediaType' element={<Explore/>} />
  <Route path='/*' element={<PageNotFound/>} />
  <Route path='/search/:query' element={<SearchResults/>} />
</Routes>
<Footer/>
</BrowserRouter>  
    </div>
  )
}

export default App
