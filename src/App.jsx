
import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import Login from "./Pages/Login"
import About from "./Pages/About"
import RootLayout from "./Layout/RootLayout"


const App = () => {

const router = createBrowserRouter(createRoutesFromElements((
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="Contact" element={<Contact />} />
    <Route path="products" element={<Products />} />
    <Route path="about" element={<About />} />  
  </Route>
  )));


  return (
    <RouterProvider router={router} />
  )
}

export default App