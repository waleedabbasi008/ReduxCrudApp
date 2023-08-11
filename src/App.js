import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Home from './components/Home';
import './App.scss';
import Create from './components/Create';
import Update from './components/Update';
function App() {
  return (
    <>



        <Header />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Create' element={<Create />} />
          <Route exact path='/edit/:id' element={<Update />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route element = {<NotFound />} />

        </Routes>
      </div>


    </>
  );
}

export default App; 
