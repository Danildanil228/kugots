import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css'

// Components
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MobileNavigation } from './components/MobileNavigation'
import Service from './components/pages/Service';
import MainPage from './components/pages/MainPage';

// Lazy loaded pages

const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const Delivery = lazy(() => import('./components/pages/Delivery'));
const TestDrive = lazy(() => import('./components/pages/TestDrive'));
const Blog = lazy(() => import('./components/pages/Blog'));
const Contacts = lazy(() => import('./components/pages/Contacts'));
const Actions = lazy(() => import('./components/pages/Actions'));
const Cart = lazy(() => import('./components/pages/Cart'));
const Like = lazy(() => import('./components/pages/Like'));
const Compare = lazy(() => import('./components/pages/Compare'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6F73EE]"></div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
          <header>
            <Header/>
          </header>
          <main className='grow lg:mt-0 mt-28 lg:pb-0 pb-16'>
            <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="/like" element={<Like />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/service" element={<Service />} />
              </Routes>
            </Suspense>
          </main>
          <footer>
            <Footer/>
          </footer>
          
          {/* Мобильная навигация */}
          <MobileNavigation />
      </div>
    </>
  )
}

export default App