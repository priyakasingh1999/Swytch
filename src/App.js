import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
// import '.BrowserRouter/App.css';
// import Header from './Component/Header';
// import Footer from './Component/Footer';
import MainBody from './Component/MainBody';
import Step1 from './Component/Step1';
import Thankyou from './Component/Thankyou';
import Step2 from "./Component/Stp2";
import Step3 from './Component/Step3';
import Pratic from './Component/Pratic';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/home" element={<MainBody/>}/>
        <Route path="/Step1" element={<Step1/>}/>
        <Route path="/Step2" element={<Step2/>}/>
        <Route path="/Thankyou" element={<Thankyou/>}/>
        <Route path="/Step3" element={<Step3/>}/>
        <Route path="/Pratic" element={<Pratic/>}/>
      </Routes>
    </Router>
    

    </>
  );
}

export default App;
