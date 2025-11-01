
import { Search } from './components/forms/Search'
import './App.css'
import { About } from './components/buttons/About'
import { BackCatalog } from './components/buttons/BackCatalog'
import { Cart } from './components/buttons/Cart'
import { Catologist } from './components/buttons/Catologist'
import { Compare } from './components/buttons/Compare'
import { CompareIcon } from './components/buttons/CompareIcon'
import { Everywhere } from './components/buttons/Everywhere'
import { ForCity } from './components/buttons/ForCity'
import { Heart } from './components/buttons/Heart'
import { Messengers } from './components/buttons/Messengers'
import { More } from './components/buttons/More'
import { Order } from './components/buttons/Order'
import { Phone } from './components/buttons/Phone'
import { PreOrder } from './components/buttons/PreOrder'
import { Price } from './components/buttons/Price'
import { Service } from './components/buttons/Service'
import { Share } from './components/buttons/Share'
import { WatchAll } from './components/buttons/WatchAll'
import { PhoneNumber } from './components/forms/PhoneNumber'
import { ChooseCity } from './components/forms/ChooseCIty'
import { InputArea } from './components/forms/InputArea'

function App() {

  return (
    <>
      
        
          <header>
            <WatchAll/>
            <PreOrder/>
            <Order/>
            <ForCity/>
            <More/>
            <Catologist/>
            <Everywhere/>
            <Price/>
            <Service/>
            <Messengers/>
            <Phone/>
            <Compare/>
            <Share/>
            <BackCatalog/>
            <CompareIcon/>
            <Heart/>
            <Cart/>
            <About/>
            <PhoneNumber/>
            <Search/>
            <ChooseCity/>
            <InputArea/>
          </header>
          <main>

          </main>
          <footer>
            
          </footer>
        
      
    </>
  )
}

export default App
