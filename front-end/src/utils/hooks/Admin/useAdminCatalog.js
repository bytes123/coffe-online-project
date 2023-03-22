import React, { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { Input } from "antd";
import { catalogListData } from "../../../static/AdminData";

export default function useAdminProduct() {
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const dataCheck = ["catalog_name"];

  const [productData, setProductData] = useState({
    row_index: "",
    catalog_name: "",
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
      catalog_name: "",
    });
  };

  const handleDelete = (data) => {
    setIsDelete(true);
    const id = data.product_id;
    console.log(id);
  };

  const columns = [
    {
      title: "STT",
      key: "product_index",
      render: (data, arr, index) => index + 1,
    },
    {
      title: "Tên danh mục",
      dataIndex: "catalog_name",
      key: "catalog_name",
      render: (data, arr, index) =>
        !isEditProduct ? (
          <p>{data}</p>
        ) : index == productData.row_index ? (
          <Input
            type="string"
            value={productData.catalog_name ? productData.catalog_name : data}
            name="catalog_name"
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
              <button className="delete-btn" onClick={() => handleDelete(arr)}>
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

  const data = React.useMemo(() => catalogListData);

  return [data, columns, isDelete, setIsDelete, dataCheck];
}
