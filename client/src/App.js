import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Support from './screens/Support';
import Employee from './screens/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './screens/Header';
import Cal from './screens/Cal';
import Cal1 from './screens/Cal1';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
     <h2 className="text-info text-center">Sahil Garg</h2>
     <BrowserRouter>
     <Header />
     <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='Home'element={<Home/>}/>
    <Route path='About'element={<About/>}/>
    <Route path='Contact'element={<Contact/>}/>
    <Route path='Support'element={<Support/>}/>
    <Route path='Employee'element={<Employee/>}/>
    <Route path='cal'element={<Cal/>}/>
    <Route path='cal1'element={<Cal1/>}/>
    <Route path='Register'element={<Register/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
