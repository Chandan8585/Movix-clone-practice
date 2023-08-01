
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
import MovieList from './components/moiveList/movieList'
import { fetchDataFromApi } from './utils/api'
import { getApiConfiguration } from './store/homeSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
     apitesting()
  }, [])
 const apitesting = ()=> {
        fetchDataFromApi('/movie/popular')
                 .then((res)=> {
                  console.log(res);
                  dispatch(getApiConfiguration(res));
                 })
                  
  }
  
  return (
    <div>
   <BrowserRouter> 
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='movie/:id' element={<Details/>}/>
  <Route path='/explore/:mediaType' element={<Explore/>} />
  <Route path='/*' element={<PageNotFound/>} />
  <Route path='/search/:query' element={<SearchResults/>} />
  <Route path='/:type' element={<MovieList/>} />
  {/* <Route path='/:type' element={<MovieList/>} /> */}
</Routes>
<Footer/>
</BrowserRouter>  
    </div>
  )
}

export default App
