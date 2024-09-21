import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Slider from './components/slider/slider';

import Home from './pages/home';
import Contact from './pages/contact';
import Register from './pages/register';
import NoPage from './pages/nopage';

export default function App()
{
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/' element={<Footer/>}/>
        <Route path='/' element={<Slider/>}/>
        <Route index element={<Home/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route/>
    </Routes>
  </BrowserRouter>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);