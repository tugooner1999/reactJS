import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Product from './components/Product';
import data from "./data";
function App() {
  const products = data;
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Nav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Product products={products} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
