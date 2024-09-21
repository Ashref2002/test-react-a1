import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './components/navbar/navBar';
import Home from './pages/home';
import Contact from './pages/contact';
import Register from './pages/register';

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
        <Route index    element={<Home />}/>
        <Route path="register" element={<Register />}/>
        <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);