import './App.css'
import { About } from './components/buttons/About'
import { BackCatalog } from './components/buttons/BackCatalog'
import { Cart } from './components/buttons/Cart'
import { Catalogist } from './components/buttons/Catologist'
import { WatchAll } from './components/buttons/WatchAll'

function App() {

  return (
    <>
      <body>
        <header>
          <WatchAll/>
          <About/>
          <BackCatalog/>
          <Cart/>
          <Catalogist/>
        </header>
        <main>

        </main>
        <footer>
          
        </footer>
      </body>
    </>
  )
}

export default App
