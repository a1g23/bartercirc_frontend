// import logo from './logo.svg';
// import './App.css';
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Outlet />
    </div>
  );
}

export default App;
