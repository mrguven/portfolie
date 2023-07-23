
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import CatchMe from './pages/CatchMe';
import Home from './pages/Home';
import Stock from './pages/Stock';
import About from './pages/About';
import Costumers from './pages/Costumers';

function App() {
  return (
    <div>

<BrowserRouter>
<NavBar />
<Routes>
  <Route path='/' element={<Home />} />
<Route path='/login' element={<Login />} ></Route>
<Route path='/costumers' element={<Costumers />} />
<Route path='/catchMe' element={<CatchMe />} />
<Route path='/stock' element={<Stock />} />
<Route path='/about' element={<About />} />
</Routes>

</BrowserRouter>
  



  
    </div>
  );
}

export default App;
