import logo from './logo.svg';
import './App.css';
import Vendor from './Vendor';
import Purchase from './Purchase';
import Dispatch from './Dispatch';
import Report from './Report';
import Category from './Category';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Slidebar from './Slidebar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Stock from './Stock';
import Test from './Test';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/dis' element={<Dispatch/>}/>
        <Route path='/rep' element={<Report/>}/>
        <Route path='/purs' element={<Purchase/>}/>
        <Route path='/' element={<Category/>}/>
        <Route path='/ven' element={<Vendor/>}/>
        <Route path='/stock' element={<Stock/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
     </Router>

        {/* <Dispatch/> */}

      {/* <Vendor/> 
       <Purchase/> */}
      
      {/* <Report/> */}
      


     
      
    </div>
  );
}

export default App;
