import { Routes, Route, Navigate } from 'react-router-dom';

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
import { NotFound } from './components/pages/NotFound';
import { Cart } from './components/pages/Cart';

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col'>

          <header>
            <Header/>
            
          </header>
          <main className='grow'>
            <Routes>
              <Route path='/' element={<Navigate to="/main" replace/>}/>
              <Route path='/main' element={<MainPage/>}/>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/test-drive" element={<TestDrive />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/actions" element={<Actions />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <footer>
            <Footer/>
          </footer>
      </div>
        
        
      
    </>
  )
}

export default App
