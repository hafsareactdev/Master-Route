

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Layoutone from './Layouts/Layoutone'
import Facilities from './Pages/Facilities'
import Layouttwo from './Layouts/Layouttwo'
import Menu from './Pages/Menu'
import Layoutthree from './Layouts/Layoutthree'
import Beverages from './Pages/Beverages'
import Breakfast from './Pages/Breakfast'
import Lunch from './Pages/Lunch'
import Kids from './Pages/Kids'

function App() {
  const makeRoute = createBrowserRouter(
    createRoutesFromElements(
     <Route>
      {/*-------------- Laout one */}
      <Route path='/' element = {<Layoutone/>}>
        <Route index element = {<Home/>}/>
        <Route path='about' element ={<About/>}/>
        <Route path='/facil' element ={<Facilities/>}/>
      </Route>
      {/*-------------- Layout two */}
      <Route path='/layouttwo'element = {<Layouttwo/>}>
      <Route index element = {<Menu/>} />
      </Route>
      {/*------------- Layout three */}
      <Route path='/layoutthree' element ={<Layoutthree/>}>
      <Route index element ={<Breakfast/>}/>
      <Route path='/layoutthree/lunch' element={<Lunch/>}/>
      <Route path='/layoutthree/beverage' element ={<Beverages/>}/>
      <Route path='/layoutthree/kids' element ={<Kids/>}/>
      </Route>
     </Route>
    )
  )
  return (
    <>
     <RouterProvider router={makeRoute}/>
    </>
  )
}
export default App
