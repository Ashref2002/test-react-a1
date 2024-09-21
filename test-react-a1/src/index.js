import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import Contact from './pages/contact';
import Register from './pages/register';

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navbar />}/>
          <Route index element={<Home />}/>
          <Route path='Contact' element={<Contact />}/>
          <Route path='Register' element={<Register />}/>
          <Route/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);