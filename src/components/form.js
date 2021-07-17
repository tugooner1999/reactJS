import { useState } from 'react'
import { useForm } from "react-hook-form";

const AddProductForm = (props) => {
    const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit = (data) => {
        const product = {
            id: Math.random().toString(5).substring(2),
            ...data
        };
        props.onAdd(product);
    };
    return (
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
                <input type="number" className="form-control" {...register("price", { required: true, min:100 })} />
                    {errors.price && errors.price.type === "required" && <span className="d-block mt-2 text-danger">Vui lòng không để trống giá</span>}
                    {errors.price && errors.price.type === "min" && <span className="d-block mt-2 text-danger">Vui lòng nhập giá trên 100</span> }
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
        </form>
    )
}

export default AddProductForm
