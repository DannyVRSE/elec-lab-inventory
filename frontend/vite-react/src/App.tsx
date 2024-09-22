import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import './assets/index.css'
import Items from "./pages/Items"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="items" element={<Items/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
