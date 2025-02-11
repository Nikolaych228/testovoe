import './App.css' 
import Header from '../shared/Header/Header';
import BalanceSection from '../shared/BalanceSection/BalanceSection';
import SectionGraph from '../shared/SectionGraph/SectionGraph';
import Footer from '../shared/Footer/Footer'

function App() {  
  return (
    <div className='overflow-hidden'>
      <Header/>
      <BalanceSection/>
      <SectionGraph/>
      <Footer/>
    </div>
  )
}
export default App
