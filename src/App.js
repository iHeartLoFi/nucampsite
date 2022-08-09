import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import './App.css';


function App() {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(fetchCampsites());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path= '/' element={<HomePage/>} />
        <Route path= 'contact' element={<ContactPage/>} />
        <Route path= 'directory' element={<CampsitesDirectoryPage/>} />
        <Route path= 'directory/:campsiteId' element={<CampsiteDetailPage/>} />
        <Route path= 'about' element={<AboutPage/>} />
      </Routes>
      <Footer/>
</div>
);
}

export default App;

//ContactPage will be blank for now. Our work is found at localhost:3000/directory.