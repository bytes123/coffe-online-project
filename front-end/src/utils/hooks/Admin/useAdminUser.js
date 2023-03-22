import React, { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { Input } from "antd";
import { userListData } from "../../../static/AdminData";

export default function useAdminUser() {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const dataCheck = [
    "user_image",
    "user_fullname",
    "user_name",
    "user_password",
    "user_address",
    "user_created_date",
  ];

  const [userData, setUserData] = useState({
    row_index: "",
    user_id: "",
    user_image: "",
    user_fullname: "",
    user_name: "",
    user_password: "",
    user_address: "",
    user_created_date: "",
  });

  const handleEditInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (data, index) => {
    setIsEdit(true);

    setUserData({
      row_index: index,
      ...data,
    });
  };

  const confirmEdit = () => {
    setIsEdit(false);
    setUserData({
      row_index: "",
      user_image: "",
      user_fullname: "",
      user_name: "",
      user_password: "",
      user_address: "",
      user_created_date: "",
    });
  };

  const handleDelete = (data) => {
    setIsDelete(true);
  };

  const columns = [
    {
      title: "STT",
      key: "row_index",
      render: (data, arr, index) => index + 1,
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "user_image",
      key: "user_image",
      render: (data, arr, index) =>
        !isEdit ? (
          <>
            <img className="w-[80px]" src={data} alt="" />
          </>
        ) : userData.row_index == index ? (
          <div className="relative w-[80px] ">
            <div className="change-icon absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
              <FaExchangeAlt className="text-4xl" />
            </div>

            <input
              type="file"
              name="file"
              className="opacity-0 absolute left-0 right-0 top-0 bottom-0 z-10 cursor-pointer"
            />

            <img className="opacity-50" src={userData.user_image} alt="" />
          </div>
        ) : (
          <img className="w-[80px]" src={data} alt="" />
        ),
    },
    {
      title: "Tên chủ tài khoản",
      dataIndex: "user_fullname",
      key: "user_fullname",
      render: (data, arr, index) =>
        !isEdit ? (
          <p>{data}</p>
        ) : index == userData.row_index ? (
          <Input
            type="string"
            value={userData.user_fullname ? userData.user_fullname : data}
            name="user_fullname"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Tài khoản",
      dataIndex: "user_name",
      key: "user_name",
      render: (data, arr, index) =>
        !isEdit ? (
          <p>{data}</p>
        ) : index == userData.row_index ? (
          <Input
            type="string"
            value={userData.user_name ? userData.user_name : data}
            name="user_name"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Mật khẩu",
      dataIndex: "user_password",
      key: "user_password",
      render: (data, arr, index) =>
        !isEdit ? (
          <p>{data}</p>
        ) : index == userData.row_index ? (
          <Input
            type="string"
            value={userData.user_password ? userData.user_password : data}
            name="user_password"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Địa chỉ",
      dataIndex: "user_address",
      key: "user_address",
      render: (data, arr, index) =>
        !isEdit ? (
          <p>{data}</p>
        ) : index == userData.row_index ? (
          <Input
            type="string"
            value={userData.user_address ? userData.user_address : data}
            name="user_address"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Ngày tạo tài khoản",
      dataIndex: "user_created_date",
      key: "user_created_date",
      render: (data, arr, index) =>
        !isEdit ? (
          <p>{data}</p>
        ) : index == userData.row_index ? (
          <Input
            type="string"
            value={
              userData.user_created_date ? userData.user_created_date : data
            }
            name="user_created_date"
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
          {!isEdit ? (
            <>
              <button
                className="edit-btn mr-5"
                name="edit-btn"
                onClick={() => handleEdit(arr, index)}
              >
                Sửa
              </button>
              <button className="delete-btn" onClick={() => handleDelete(arr)}>
                Xóa
              </button>
            </>
          ) : (
            <button className="confirm-btn" onClick={confirmEdit}>
              Hoàn tất
            </button>
          )}
        </div>
      ),
    },
  ];

  const data = React.useMemo(() => userListData);

  return [data, columns, isDelete, setIsDelete, dataCheck];
}
