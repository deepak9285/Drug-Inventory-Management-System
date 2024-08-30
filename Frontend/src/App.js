import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Singnup";
import Home from "./Components/Home"; // Corrected import statement
import InstituteDashboard from "./Components/Institution/Sidebar/Dashboard/Dashboard";
//import InstituteContainer from "./Components/Institution/InstituteContainer";
//import Inventory from "./Components/Institution/Sidebar/Inventory";
//import Orders from "./Components/Institution/Sidebar/Orders"
import Analytics from "./Components/Institution/Sidebar/Analytics/Analytics";
import Transactions from "./Components/Institution/Sidebar/Transaction/page";
//import MedicineSearchDialog from "./Components/Institution/Sidebar/Inventory/MedicineSearchDialog";
import { Routes, Route } from "react-router";
import InstituteContainer from "./Components/Institution/InstituteContainer";
import OrderList from "./Components/Institution/Sidebar/Orders/ToOrders";
import Vendors from "./Components/Institution/Sidebar/Vendors/VendorList";
import MyOrders from "./Components/Institution/Sidebar/Orders/Orders";
import Notifications from "./Components/Institution/Sidebar/RecommendationSystem/Notification";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="Institute" element={<InstituteContainer/>}>
          <Route path="InstituteDashboard" element={<InstituteDashboard />} />
           <Route path="InstituteAnalytics" element={<Analytics />} />
           <Route path="Transactions" element={<Transactions/>}/>
           <Route path="to-orders-list" element={<OrderList/>}/>
           <Route path="Notifications" element ={<Notifications/>}/>
           <Route path="MyOrders" element={<MyOrders />} />
           <Route path="vendors" element={<Vendors />} /> 
          {/* // <Route path="InstituteInventory" element={<Inventory />} />
           <Route path="InstituteOrders" element={<Orders />} />
          // */}
        </Route>
        {/* <MedicineSearchDialog/> */}
        {/* <Sidebar/> */}
        {/* <InstituteContainer /> */}
      </Routes>
    </div>
  );
}

export default App;
