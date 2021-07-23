import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import data from "./data";
import { add, getAll, remove, update } from "./api/productApi";
import Routes from "./routes";
import swal from 'sweetalert';

function App() {
  const [products, setProducts] = useState(data);

  // hien thi data tu API
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);


  // xoa data tu API
  const onHandleRemove = (id) => {
    swal({
      title: "bạn có chắc muốn xóa ?",
      text: "Bạn có thể mất vĩnh viễn dữ liệu và không thể khôi phục",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Xóa thành công, dữ liệu mới sẽ được cập nhật", {
            icon: "success", timer: 2000
          });
          remove(id); // xoa data tren API
          const newProduct = products.filter((item) => item.id !== id);
          setProducts(newProduct);
        } else {
          swal("Xóa thất bại ! Dữ liệu bạn nguyên vẹn", {
            icon: "error", timer: 2000
          });
        }
      });
  };


  // them data tu API
  const onHandleAdd = async (item) => {
    swal({
      title: "Thêm thành công!",
      text: "Dữ liệu đang được cập nhật",
      icon: "success",
      timer: 2000
    });
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  }

  // cập nhật data từ API
  const onHandleEdit = async (item) => {
    swal({
      title: "Cập nhật thành công!",
      text: "Dữ liệu đang được cập nhật",
      icon: "success",
      timer: 2000
    });
    try {
      const { data } = await update(item);
      const newProduct = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Routes
      products={products}
      onRemove={onHandleRemove}
      onAdd={onHandleAdd}
      onEdit={onHandleEdit} />
  );
}

export default App;
