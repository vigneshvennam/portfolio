
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Projects from './components/Projects'
import Writings from './components/Writings'
import Memories from './components/Memories'
import Contact from './components/Contact'
import Home from './components/Home'




function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Writings' element={<Writings/>}></Route>
      <Route path='/Memories' element={<Memories/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
     </Routes>
   
    </Router>

  );
}

export default App;
