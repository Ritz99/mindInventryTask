import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/ProductList/ProductList';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <ProductList/>
     <Footer/>
    </div>
  );
}

export default App;
