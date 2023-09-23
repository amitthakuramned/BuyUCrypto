import React from 'react';
import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = (props:any) => {
  return (
    <Header>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
    <div className="HeaderLogo">BuyUCrypto</div>
      <Menu.Item key="1">
        <Link to="/">Market</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/about">Trade</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  </Header>
  );
};

export default Navbar;
