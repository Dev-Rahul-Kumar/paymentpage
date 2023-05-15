import './App.css';
import Navbar from './component/Navbar'
import Mainpage from './component/Mainpage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>

      <Router>
        
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Mainpage />} />
            

          </Routes>
        
      </Router>
      
    </>
  );
}

export default App;
