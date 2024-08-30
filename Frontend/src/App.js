import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Singnup";
import Sidebar from "./Components/Institution/Sidebar/Sidebar";
import Home from "./Components/Home"; // Corrected import statement
//import InstituteDashboard from "./Components/Institution/Sidebar/Inventory/Dashboard";
//import InstituteContainer from "./Components/Institution/InstituteContainer";
//import Inventory from "./Components/Institution/Sidebar/Inventory";
//import Orders from "./Components/Institution/Sidebar/Orders"
//import Analytics from "./Components/Institution/Sidebar/Analytics";
//import MedicineSearchDialog from "./Components/Institution/Sidebar/Inventory/MedicineSearchDialog";
import { Route,Routes } from "react-router";
import InstituteContainer from "./Components/Institution/InstituteContainer";
import Dashboard from "./Components/Institution/Sidebar/Dashboard/Dashboard";
import {useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      {/* <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Signup />} /> */}
      {/* <Route path="Institute" element={<InstituteContainer />}>
        <Route path="InstituteDashboard" element={<InstituteDashboard/>} />
        <Route path="InstituteAnalytics" element={<Analytics/>} />
        <Route path="InstituteInventory" element={<Inventory />} />
        <Route path="InstituteOrders" element={<Orders />} />
        <Route path="VendorList" element={<InstituteDashboard />} />
      </Route> */}
      {/* <MedicineSearchDialog/> */}
      {/* <Sidebar/> */}
      <InstituteContainer/>
      <Routes> <Route path="/Dashboard" element={<Dashboard/>}/></Routes>
     
      
    </div>
  );
}

export default App;
