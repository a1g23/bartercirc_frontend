// import logo from './logo.svg';
// import './App.css';
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header"



function App() {
  return (
    <div className="App">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
