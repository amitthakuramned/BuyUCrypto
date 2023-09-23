import React, { useEffect, useState } from "react";
import {
  useGetCurrencyQuery,
  useGetLiveDataAllQuery,
} from "../service/appSlice";
import List from "../components/list/list";
import { AppRoutes } from "../routes/appRoutes";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import SortButtons from "../components/sorter/sorter";

const TradePage = () => {
  const navigate = useNavigate();
  const {
    data: liveaAllData,
    error: liveaAllError,
    isLoading: liveaAllLoading,
  } = useGetLiveDataAllQuery("");
  const [desiredParam, setDesiredParam] = useState("");
  const handelSelectedList = (item: any) => {
    navigate(AppRoutes.BITDETAILS, { state: { coinDetail: item } });
  };


  if (liveaAllLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="content">
        <h1>Trade</h1>
        <p>This is a Trade Sheet.</p>
        <div style={{background:"#e5e1ea"}}>
          <Row gutter={24} style={{ width: "100%" }}>
            <Col span={6}>
              <h4 style={{ marginLeft: "10px" }}>Coin</h4>
            </Col>
            <Col span={5}></Col>
            <Col span={2}></Col>
            <Col span={4}>
              <h4 style={{textAlign:'end'}}>Global 24hr Vol</h4>
            </Col>
            <Col span={4}>
              <h4 style={{textAlign:'start'}}>24hr % Change</h4>
            </Col>
            <Col span={3}>
              <h4 style={{textAlign:'end'}}>Price</h4>
            </Col>
          </Row>
        </div>
        {liveaAllData && (
          <div>
            <List
              dataSource={liveaAllData?.data}
              handelSelectedList={handelSelectedList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TradePage;
