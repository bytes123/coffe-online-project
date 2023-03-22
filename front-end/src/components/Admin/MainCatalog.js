import React from "react";
import Section from "../../utils/components/Section";
import UploadFileExcel from "../../utils/components/UploadFileExcel";
import { Table } from "antd";
import useAdminCatalog from "../../utils/hooks/Admin/useAdminCatalog";
import ConfirmDialog from "../../utils/components/ConfirmDialog";

export default function MainCatalog() {
  const [data, columns, isDelete, setIsDelete, dataCheck] = useAdminCatalog();

  const closeConfirmDialog = () => {
    setIsDelete(false);
  };

  console.log(isDelete);

  return (
    <div className="main_catalog mx-2">
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
      <h1 className="text-4xl font-bold m-5">Quản lý danh mục</h1>
      <Section span={24}>
        <div className="wrapper p-8 ">
          <h3 className="text-2xl font-bold">Thêm danh mục</h3>
          <p className="admin_catalog-add-content m-5">
            Chọn 1 tệp Excel bao gồm danh sách danh mục
          </p>
          <div className="catalog_upload-wrapper">
            <UploadFileExcel dataCheck={dataCheck} />
          </div>
        </div>
      </Section>
      <Section span={24}>
        <div className="wrapper p-8">
          <h3 className="text-2xl font-bold mb-5">Danh sách danh mục</h3>
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
