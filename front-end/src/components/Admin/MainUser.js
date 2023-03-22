import React from "react";
import Section from "../../utils/components/Section";
import UploadFileExcel from "../../utils/components/UploadFileExcel";
import ConfirmDialog from "../../utils/components/ConfirmDialog";
import { Table } from "antd";
import useAdminUser from "../../utils/hooks/Admin/useAdminUser";

export default function MainUser() {
  const [data, columns, isDelete, setIsDelete, dataCheck] = useAdminUser();

  const closeConfirmDialog = () => {
    setIsDelete(false);
  };

  return (
    <div className="main_user mx-2">
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
      <h1 className="text-4xl font-bold m-5">Quản lý tài khoản</h1>
      <Section span={24}>
        <div className="wrapper p-8 ">
          <h3 className="text-2xl font-bold">Thêm tài khoản</h3>
          <p className="admin_catalog-add-content m-5">
            Chọn 1 tệp Excel bao gồm danh sách tài khoản
          </p>
          <div className="catalog_upload-wrapper">
            <UploadFileExcel dataCheck={dataCheck} />
          </div>
        </div>
      </Section>
      <Section span={24}>
        <div className="wrapper p-8">
          <h3 className="text-2xl font-bold mb-5">Danh sách tài khoản</h3>
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
