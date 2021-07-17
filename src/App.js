import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Product from './components/Product';
import AddProductForm from './components/form';
import data from "./data";
function App() {
  const [products, setProducts] = useState(data);
  // const [status, setStatus] = useState(false);
  // const [count, setCount] = useState(0);
  // function change(){
  //   setStatus(!status);
  //   setCount(count + 1)
  // }

  // const [color, setColor]  = useState();

  useEffect(() => {
    fetch('https://5f1d003539d95a0016953aaa.mockapi.io/Products')
      .then((respone) => respone.json())
      .then((data) => setProducts(data));
  }, []);

  function onHandleRemove(id) {
    fetch('https://5f1d003539d95a0016953aaa.mockapi.io/Products/' + id, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => {
        const newProduct = products.filter((item) => item.id !== data.id);
        setProducts(newProduct);
      })
  }

  const onHandleAdd = (item) => {
    fetch('https://5f1d003539d95a0016953aaa.mockapi.io/Products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data])
      })
  }
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Nav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <br></br>
            <AddProductForm onAdd={onHandleAdd} />
            <Product products={products} onRemove={onHandleRemove} />
          </main>
        </div>
      </div>

      {/* {count}
      {status && (
        <div>Nôi dung</div>
      )}


      {/* <button className="btn btn-primary" onClick = {() => change(!status)}>Click</button> */}
      {/* khi ấn Click thì hàm change sẽ thực hiện setStatus và setCount set giá trị
       cho biến status và count với value mặc định sang giá trị khác */}

      {/* <div className="container" style={{border: '1px solid #000', width: '200px', height: '200px', background: color,}} />
       <br></br>
       <button className="btn btn-success" onClick = {() => setColor("green")}>Xanh</button>
       <button className="btn btn-danger" onClick = {() => setColor("red")}>Đỏ</button> */}
    </div>
  );
}

export default App;
