import React, { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { Input } from "antd";
import { productListData } from "../../../static/AdminData";

export default function useAdminProduct() {
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const dataCheck = [
    "product_image",
    "product_name",
    "product_catalog",
    "product_price",
  ];

  const [productData, setProductData] = useState({
    row_index: "",
    product_id: "",
    product_image: "",
    product_name: "",
    product_catalog: "",
    product_price: "",
  });

  const handleEditInput = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditProduct = (data, index) => {
    setIsEditProduct(true);

    setProductData({
      row_index: index,
      ...data,
    });
  };

  const confirmEditProduct = () => {
    setIsEditProduct(false);
    console.log(productData);
    setProductData({
      row_index: "",
      product_image: "",
      product_name: "",
      product_catalog: "",
      product_price: "",
    });
  };

  const handleDeleteProduct = (data) => {
    setIsDelete(true);
    const id = data.product_id;
    console.log(2);
  };

  const columns = [
    {
      title: "STT",
      key: "product_index",
      render: (data, arr, index) => index + 1,
    },
    {
      title: "Hình ảnh",
      dataIndex: "product_image",
      key: "product_image",
      render: (data, arr, index) =>
        !isEditProduct ? (
          <>
            <img className="w-[80px]" src={data} alt="" />
          </>
        ) : productData.row_index == index ? (
          <div className="relative w-[80px] ">
            <div className="change-icon absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
              <FaExchangeAlt className="text-4xl" />
            </div>

            <input
              type="file"
              name="file"
              className="opacity-0 absolute left-0 right-0 top-0 bottom-0 z-10 cursor-pointer"
            />

            <img
              className="opacity-50"
              src={productData.product_image}
              alt=""
            />
          </div>
        ) : (
          <img className="w-[80px]" src={data} alt="" />
        ),
    },
    {
      title: "Tên",
      dataIndex: "product_name",
      key: "product_name",
      render: (data, arr, index) =>
        !isEditProduct ? (
          <p>{data}</p>
        ) : index == productData.row_index ? (
          <Input
            type="string"
            value={productData.product_name ? productData.product_name : data}
            name="product_name"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Danh mục",
      dataIndex: "product_catalog",
      key: "product_catalog",
      render: (data, arr, index) =>
        !isEditProduct ? (
          <p>{data}</p>
        ) : index == productData.row_index ? (
          <Input
            type="string"
            value={
              productData.product_catalog ? productData.product_catalog : data
            }
            name="product_catalog"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Giá sản phẩm",
      dataIndex: "product_price",
      key: "product_price",
      render: (data, arr, index) =>
        !isEditProduct ? (
          <p>{data}</p>
        ) : index == productData.row_index ? (
          <Input
            type="string"
            value={productData.product_price ? productData.product_price : data}
            name="product_price"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },

    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (data, arr, index) => (
        <div className="flex">
          {!isEditProduct ? (
            <>
              <button
                className="edit-btn mr-5"
                name="edit-btn"
                onClick={() => handleEditProduct(arr, index)}
              >
                Sửa
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteProduct(arr)}
              >
                Xóa
              </button>
            </>
          ) : (
            <button className="confirm-btn" onClick={confirmEditProduct}>
              Hoàn tất
            </button>
          )}
        </div>
      ),
    },
  ];

  const data = React.useMemo(() => productListData);

  return [data, columns, isDelete, setIsDelete, dataCheck];
}
