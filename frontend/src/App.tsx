import { Routes, Route } from 'react-router-dom';

import './App.css'


import { Header } from './components/Header'
import { AboutPage } from './components/pages/AboutPage';
import { Delivery } from './components/pages/Delivery';
import { TestDrive } from './components/pages/TestDrive';
import { Blog } from './components/pages/Blog';
import { Contacts } from './components/pages/Contacts';
import { Actions } from './components/pages/Actions';
import { Footer } from './components/Footer';
import { MainPage } from './components/pages/MainPage';

function App() {

  return (
    <>
      
        
          <header>
            <Header/>
          </header>
          <main>
            <Routes>
              <Route path='/main' element={<MainPage/>}/>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/test-drive" element={<TestDrive />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/actions" element={<Actions />} />
            </Routes>
            
          </main>
          <footer>
            <Footer/>
          </footer>
        
      
    </>
  )
}

export default App
