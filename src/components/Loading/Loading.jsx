import { Alert, Space, Spin } from "antd";

const Loading = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Space>
        <Spin tip="Loading" size="small">
          <div className="content" />
        </Spin>
        <Spin tip="Loading">
          <div className="content" />
        </Spin>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>

      <Spin tip="Loading...">
        <Alert
          message="Crypto Wizzards is loading"
          description="Please wait while we load the data. This may take a few seconds."
          type="info"
        />
      </Spin>
    </Space>
  );
};

export default Loading;
