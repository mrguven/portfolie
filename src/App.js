
import { BrowserRouter,Routes,Route,HashRouter  } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import CatchMe from './pages/CatchMe';

import Todo from './pages/Todo';
import MyTaxi from './pages/MyTaxi';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import MyPlayList from './pages/MyPlayList';
import Portfolio from './pages/portfolio/Portfolio';
import Home from './pages/homepage/Home';


function App() {
  return (
    <div>

<BrowserRouter>
<NavBar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Portfolio' element={<Portfolio />} />
<Route path='/login' element={<Login />} ></Route>
<Route path='/catchMe' element={<CatchMe />} />
<Route path='/myplaylist' element={<MyPlayList />} />
<Route path='/todo' element={<Todo />} />
<Route path='/mytaxi' element={<MyTaxi />}></Route>
<Route path='/contact' element={<Contact />}></Route>
</Routes>
<Footer />
</BrowserRouter>
  



  
    </div>
  );
}

export default App;
