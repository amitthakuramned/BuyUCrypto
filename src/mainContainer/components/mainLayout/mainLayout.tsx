import React from "react";
import { Layout } from "antd";
import Navbar from "../header/header";

const { Header, Content } = Layout;

const MainLayout = ({ children }: any) => {
  const ScrollComponent = ({ children }: any) => {
    return <div style={{ height: "500px", overflowY: "auto" }}>{children}</div>;
  };
  return (
    <Layout>
      <Header style={{ background: "#fff", padding: 1 }}>
        <Navbar />
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <ScrollComponent>{children}</ScrollComponent>
      </Content>
    </Layout>
  );
};

export default MainLayout;
