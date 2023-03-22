import React from "react";
import Section from "../../utils/components/Section";
import UploadFileExcel from "../../utils/components/UploadFileExcel";
import ConfirmDialog from "../../utils/components/ConfirmDialog";
import { Table } from "antd";
import useAdminProduct from "../../utils/hooks/Admin/useAdminProduct";

export default function MainProduct() {
  const [data, columns, isDelete, setIsDelete, dataCheck] = useAdminProduct();

  const closeConfirmDialog = () => {
    setIsDelete(false);
  };

  return (
    <div className="main_product mx-2">
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
      <h1 className="text-4xl font-bold m-5">Quản lý sản phẩm</h1>
      <Section span={24}>
        <div className="wrapper p-8 ">
          <h3 className="text-2xl font-bold">Thêm sản phẩm</h3>
          <p className="admin_product-add-content m-5">
            Chọn 1 tệp Excel bao gồm danh sách sản phẩm
          </p>
          <div className="product_upload-wrapper">
            <UploadFileExcel dataCheck={dataCheck} />
          </div>
        </div>
      </Section>
      <Section span={24}>
        <div className="wrapper p-8">
          <h3 className="text-2xl font-bold mb-5">Danh sách sản phẩm</h3>
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
