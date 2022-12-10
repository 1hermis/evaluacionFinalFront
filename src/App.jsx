
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";


function App() {
  return (
      <div className="App">
          <Navbar/>
         <Card name="pepe"/>
          <Footer/>
      </div>
  );
}

export default App;
