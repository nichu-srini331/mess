import './App.css';
import Vendor from './Vendor';
import Purchase from './Components/purchaseComponent/purchase';
import Dispatch from './Dispatch';
import Report from './Report';
import Category from './Category';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Slidebar from './Slidebar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Stock from './Stock';
import Login from './Components/loginComponent/login';
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dis' element={<Dispatch/>}/>
        <Route path='/rep' element={<Report/>}/>
        <Route path='/purs' element={<Purchase/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/ven' element={<Vendor/>}/>
        <Route path='/stock' element={<Stock/>}/>
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
