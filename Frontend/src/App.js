
import Login from './Components/Auth/Login';
import Singnup from './Components/Auth/Singnup';
import Home from './Components/Home';  // Corrected import statement
import Dashboard from './Components/Institution/Sidebar/Inventory/Dashboard';
import MedicineSearchDialog from './Components/Institution/Sidebar/Inventory/MedicineSearchDialog';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
     <Dashboard/>
     {/* <MedicineSearchDialog/> */}
    </div>
  );
}

export default App;
