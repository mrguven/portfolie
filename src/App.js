
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import CatchMe from './pages/CatchMe';
import Home from './pages/Home';

function App() {
  return (
    <div>

<BrowserRouter>
<NavBar />
<Routes>
  <Route path='/' element={<Home />} />
<Route path='/login' element={<Login />} ></Route>
<Route path='/catchMe' element={<CatchMe />} />
</Routes>

</BrowserRouter>
  



  
    </div>
  );
}

export default App;
