import React from 'react';
import { Table } from 'antd';
import withInfiniteScroll from '../infinytScrollComponent/InfiniteScrollComponent'; // Adjust the path

const CustomTable = (props:any) => {
  const {columns,dataSource,className}=props
  return (
    <Table
      className={className}
      dataSource={dataSource}
      columns={columns}
      pagination={false}
     
    />
  );
};

export default withInfiniteScroll(CustomTable);
