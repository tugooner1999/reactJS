import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { get } from "../../../api/productApi";

const EditProductForm = (props) => {
    const [product, setProduct] = useState({});
    const { register, 
        handleSubmit,
         formState: { errors },
        reset, } = useForm();

    // lấy id trên url
    const { id } = useParams();

    // back lại màn hình list khi thêm sửa thành công
    const history = useHistory();

    // call API de lay object dua vao id
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await get(id);
            setProduct(data);
            reset(data);
        };
        getProduct();
    }, []);


    const onSubmit = (data) => {
        const product = {
            id: id,
            ...data
        };
        props.onEdit(product);
        history.push("/product");
    };
    return (
        <>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Cập nhật sản phẩm</h1>
            </div>
            <form className="container col-md-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        defaultValue={product.name}
                        className="form-control"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">Không để trống tên sản phẩm</span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input type="number" 
                    defaultValue={product.price}
                    className="form-control" {...register("price", { required: true, min: 100 })} />
                    {errors.price && errors.price.type === "required" && <span className="d-block mt-2 text-danger">Vui lòng không để trống giá</span>}
                    {errors.price && errors.price.type === "min" && <span className="d-block mt-2 text-danger">Vui lòng nhập giá trên 100</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Danh mục</label>
                    <select className="form-control"
                    defaultValue={product.category} 
                    {...register("category")}>
                        <option value="Danh mục A">Danh mục A</option>
                        <option value="Danh mục B">Danh mục B</option>
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">
                    Cập nhật
                </button>
                <Link
                    to="/product"
                    type="button"
                    style={{marginLeft: '10px'}}
                    className="btn btn-danger">
                    Trở về
                </Link>
            </form>
        </>
    )
}

export default EditProductForm;
