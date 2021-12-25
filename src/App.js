import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './Dashboard';
import Userlist from './userlist';
import Productlist from './productlist';
import Createuser from './createuser';
import Createproduct from './createproduct';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


function App() {
  return (<BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            {/* <Dashboard/> */}
            {/* <Userlist/> */}
           
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="user" element={<Userlist />}></Route>
              <Route path="product" element={<Productlist />}></Route>
              <Route path="usercreate" element={<Createuser />}></Route>
              <Route path="productcreate" element={<Createproduct />}></Route>
            
              
            </Routes>

          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>

  );
}


export default App;
