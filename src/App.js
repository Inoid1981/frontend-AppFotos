
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RegForm from './pages/Regform';
import Login from './pages/Login';
import Posts from './pages/Posts';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return <main>

  <Header/>
<Routes>
  <Route path = "/" element= {<HomePage/>}></Route>
  <Route path = "/register" element= {<RegForm/>}></Route>
  <Route path = "/login" element= {<Login/>}></Route>
  <Route path = "/posts/:id" element= {<Posts/>}></Route>
  <Route path = "*" element= {<NotFoundPage/>}></Route>

</Routes>
  <Footer/>
  
  </main>;
}

export default App;
