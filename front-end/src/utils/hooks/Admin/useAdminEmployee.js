import React, { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { Input } from "antd";
import { employeeListData } from "../../../static/AdminData";

export default function useAdminEmployee() {
  const [isEditEmployee, setIsEditEmployee] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const dataCheck = [
    " employee_image",
    " employee_name",
    " employee_age",
    " employee_hometown",
    " employee_position",
    " employee_salary",
  ];

  const [employeeData, setEmployeeData] = useState({
    row_index: "",
    employee_image: "",
    employee_name: "",
    employee_age: "",
    employee_hometown: "",
    employee_position: "",
    employee_salary: "",
  });

  const handleEditInput = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditEmployee = (data, index) => {
    setIsEditEmployee(true);

    setEmployeeData({
      row_index: index,
      ...data,
    });
  };

  const confirmEditEmployee = () => {
    setIsEditEmployee(false);
    setEmployeeData({
      row_index: "",
      employee_image: "",
      employee_name: "",
      employee_age: "",
      employee_hometown: "",
      employee_position: "",
      employee_salary: "",
    });
  };

  const handleDelete = (data) => {
    setIsDelete(true);
    const id = data.employee_id;
    console.log(id);
  };

  const columns = [
    {
      title: "STT",
      key: "employee_index",
      render: (data, arr, index) => index + 1,
    },
    {
      title: "Hình nhân viên",
      dataIndex: "employee_image",
      key: "employee_image",
      render: (data, arr, index) =>
        !isEditEmployee ? (
          <img className="w-[80px]" src={data} />
        ) : index == employeeData.row_index ? (
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
              src={employeeData.employee_image}
              alt=""
            />
          </div>
        ) : (
          <img className=" w-[80px]" src={data} alt="" />
        ),
    },
    {
      title: "Tên nhân viên",
      dataIndex: "employee_name",
      key: "employee_name",
      render: (data, arr, index) =>
        !isEditEmployee ? (
          <p>{data}</p>
        ) : index == employeeData.row_index ? (
          <Input
            type="string"
            value={
              employeeData.employee_name ? employeeData.employee_name : data
            }
            name="employee_name"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Tuổi nhân viên",
      dataIndex: "employee_age",
      key: "employee_age",
      render: (data, arr, index) =>
        !isEditEmployee ? (
          <p>{data}</p>
        ) : index == employeeData.row_index ? (
          <Input
            type="string"
            value={employeeData.employee_age ? employeeData.employee_age : data}
            name="employee_age"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Quê nhân viên",
      dataIndex: "employee_hometown",
      key: "employee_hometown",
      render: (data, arr, index) =>
        !isEditEmployee ? (
          <p>{data}</p>
        ) : index == employeeData.row_index ? (
          <Input
            type="string"
            value={
              employeeData.employee_hometown
                ? employeeData.employee_hometown
                : data
            }
            name="employee_hometown"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Chức vụ nhân viên",
      dataIndex: "employee_position",
      key: "employee_position",
      render: (data, arr, index) =>
        !isEditEmployee ? (
          <p>{data}</p>
        ) : index == employeeData.row_index ? (
          <Input
            type="string"
            value={
              employeeData.employee_position
                ? employeeData.employee_position
                : data
            }
            name="employee_position"
            onChange={handleEditInput}
          />
        ) : (
          <p>{data}</p>
        ),
    },
    {
      title: "Tiền lương",
      dataIndex: "employee_salary",
      key: "employee_salary",
      render: (data, arr, index) =>
        !isEditEmployee ? (
          <p>{data}</p>
        ) : index == employeeData.row_index ? (
          <Input
            type="string"
            value={
              employeeData.employee_salary ? employeeData.employee_salary : data
            }
            name="employee_salary"
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
          {!isEditEmployee ? (
            <>
              <button
                className="edit-btn mr-5"
                name="edit-btn"
                onClick={() => handleEditEmployee(arr, index)}
              >
                Sửa
              </button>
              <button className="delete-btn" onClick={() => handleDelete(arr)}>
                Xóa
              </button>
            </>
          ) : (
            <button className="confirm-btn" onClick={confirmEditEmployee}>
              Hoàn tất
            </button>
          )}
        </div>
      ),
    },
  ];

  const data = React.useMemo(() => employeeListData);

  return [data, columns, isDelete, setIsDelete, dataCheck];
}
