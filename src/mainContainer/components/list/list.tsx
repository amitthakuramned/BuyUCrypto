import React from "react";
import { Avatar, Col, List, Row } from "antd";
import withInfiniteScroll from "../infinytScrollComponent/InfiniteScrollComponent";
import { formatName } from "../../utility/appUtility";

const CustomList = (props: any) => {
const {dataSource,handelSelectedList} = props
  return (
    <List
      dataSource={dataSource}
      renderItem={(item: any, index: any) => (
        <>
          <List.Item key={index + 1} className="listSelection" onClick={()=>handelSelectedList(item)}>
            <Row gutter={24} style={{ width: "100%" }}>
              <Col span={6}>
                <div className="loogoCell">
                  <span>
                    <Avatar
                      className="avatarLogo"
                      src={`https://d33epyjwhmr3r5.cloudfront.net/assets/currency/${item?.baseCurrency.toLowerCase()}.png`}
                    />
                  </span>
                  <span className="logoDetails">
                    <h4>{formatName(item?.marketName)}</h4>
                    <h4>{item?.sprd}%</h4>
                  </span>
                </div>
              </Col>
              <Col span={5}>
                <div className="titleCell">
                  <h3>{(item.currToName)}</h3>
                </div>
              </Col>
              <Col span={4}>
                <div className="titleCell">
                  <h4>{formatName(item.marketName)}</h4>
                </div>
              </Col>
              <Col span={2}>
                <div className="titleCell">
                  <h3>₹{(item?.v24)}</h3>
                </div>
              </Col>
              <Col span={2}>
                <div className="titleCell">
                  <h3 style={{color:item?.c24p > 0?'green':item?.c24p < 0?'red':'black'}}>%{(item?.c24p)}</h3>
                </div>
              </Col>
              <Col span={5}>
                <div className="priceCell">
                  <h3>
                    {item?.LTRate} {item.quoteCurrency}
                  </h3>
                  <h4>
                    {item?.tp24} {item.quoteCurrency}
                  </h4>
                </div>
              </Col>
            </Row>
          </List.Item>
        </>
      )}
    />
  );
};

export default withInfiniteScroll(CustomList);
