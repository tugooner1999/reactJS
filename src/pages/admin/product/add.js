import { useState } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddProductForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        const product = {
            id: Math.random().toString(5).substring(2),
            ...data
        };
        props.onAdd(product);
        history.push("/product");
    };
    return (
        <>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Thêm sản phẩm</h1>
            </div>
            <form className="container col-md-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">Không để trống tên sản phẩm</span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input type="number" className="form-control" {...register("price", { required: true, min: 100 })} />
                    {errors.price && errors.price.type === "required" && <span className="d-block mt-2 text-danger">Vui lòng không để trống giá</span>}
                    {errors.price && errors.price.type === "min" && <span className="d-block mt-2 text-danger">Vui lòng nhập giá trên 100</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Danh mục</label>
                    <select className="form-control" {...register("category")}>
                        <option value="Danh mục A">Danh mục A</option>
                        <option value="Danh mục B">Danh mục B</option>
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">
                    Thêm sản phẩm
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

export default AddProductForm
