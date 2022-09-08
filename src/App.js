// import logo from './logo.svg';
import './App.css';
// import {Button} from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Registration from  './Registration'
import UpdateProduct from './UpdateProduct'
import AddProduct from './AddProduct' 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <h1>E-Commerce Project</h1>
     <Routes>
     <Route path="Login" exact element= {<Login/>} />
     <Route path="Registration" exact element= {<Registration/>} />
     <Route path="Update" exact element= {<UpdateProduct/>} />
     <Route path="Add" exact element= {<AddProduct/>} />

     
     {/* </Route> */}
     </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
