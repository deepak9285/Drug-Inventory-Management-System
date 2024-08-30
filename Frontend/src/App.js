import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Singnup";
import Home from "./Components/Home"; // Corrected import statement
import InstituteDashboard from "./Components/Institution/Sidebar/Dashboard/Dashboard";
//import InstituteContainer from "./Components/Institution/InstituteContainer";
//import Inventory from "./Components/Institution/Sidebar/Inventory";
//import Orders from "./Components/Institution/Sidebar/Orders"
//import Analytics from "./Components/Institution/Sidebar/Analytics";
//import MedicineSearchDialog from "./Components/Institution/Sidebar/Inventory/MedicineSearchDialog";
import { Routes, Route } from "react-router";
import InstituteContainer from "./Components/Institution/InstituteContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="Institute" element={<InstituteContainer/>}>
          <Route path="InstituteDashboard" element={<InstituteDashboard />} />
          
          {/* <Route path="InstituteAnalytics" element={<Analytics />} />
          <Route path="InstituteInventory" element={<Inventory />} />
          <Route path="InstituteOrders" element={<Orders />} />
          <Route path="VendorList" element={<InstituteDashboard />} /> */}
        </Route>
        {/* <MedicineSearchDialog/> */}
        {/* <Sidebar/> */}
        {/* <InstituteContainer /> */}
      </Routes>
    </div>
  );
}

export default App;
