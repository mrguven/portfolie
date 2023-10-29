
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import CatchMe from './pages/CatchMe';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Todo from './pages/Todo';
import Costumers from './pages/Costumers';
import MyTaxi from './pages/MyTaxi';
import Footer from './components/Footer';
import Nssg from './pages/Nssg';
import Taxi2 from './pages/Taxi2'

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
<Route path='/todo' element={<Todo />} />
<Route path='/mytaxi' element={<MyTaxi />}></Route>
<Route path='/nssg' element={<Nssg />}></Route>
<Route path='/taxi2' element={<Taxi2 />}></Route>
</Routes>
<Footer />
</BrowserRouter>
  



  
    </div>
  );
}

export default App;
