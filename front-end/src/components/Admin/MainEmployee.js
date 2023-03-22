import React from "react";
import Section from "../../utils/components/Section";
import UploadFileExcel from "../../utils/components/UploadFileExcel";
import ConfirmDialog from "../../utils/components/ConfirmDialog";
import { Table } from "antd";
import useAdminEmployee from "../../utils/hooks/Admin/useAdminEmployee";

export default function MainEmployee() {
  const [data, columns, isDelete, setIsDelete, dataCheck] = useAdminEmployee();

  const closeConfirmDialog = () => {
    setIsDelete(false);
  };

  console.log(isDelete);
  return (
    <div className="main_employee mx-2">
      {isDelete ? (
        <ConfirmDialog
          active={true}
          onClose={closeConfirmDialog}
          header={"Bạn có chắc muốn xóa cột này ?"}
          content={"Bạn sẽ không thể phục hồi sau khi xóa cột!"}
        />
      ) : (
        ""
      )}
      <h1 className="text-4xl font-bold m-5">Quản lý nhân viên</h1>
      <Section span={24}>
        <div className="wrapper p-8 ">
          <h3 className="text-2xl font-bold">Thêm nhân viên</h3>
          <p className="admin_catalog-add-content m-5">
            Chọn 1 tệp Excel bao gồm danh sách nhân viên
          </p>
          <div className="catalog_upload-wrapper">
            <UploadFileExcel dataCheck={dataCheck} />
          </div>
        </div>
      </Section>
      <Section span={24}>
        <div className="wrapper p-8">
          <h3 className="text-2xl font-bold mb-5">Danh sách nhân viên</h3>
          <div className="table-wrapper">
            <Table
              bordered={true}
              columns={columns}
              dataSource={data}
              className="text-sm"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
