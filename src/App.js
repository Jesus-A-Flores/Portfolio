import './App.css';
//importar router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sections from './Sections';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter className='content'>
        <Routes>
          <Route path="/" element={<Sections />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;