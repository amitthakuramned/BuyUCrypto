import React from "react";
import Navbar from "../components/header/header";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Card } from "antd";
import { useGetLiveDataByCodeQuery } from "../service/appSlice";

export interface CoinData {
  currToName: any;
  marketName: any;
  c24: any;
  bid: any;
  h24: string;
  l24: any;
  v24: any;
  baseCurrency: string;
}

const BitDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const coinDetail = location?.state?.coinDetail;

  const { Meta } = Card;

  const goBack = () => {
    navigate(-1);
  };

  const {
    data: coinData,
    error: coinError,
    isLoading: coinLoading,
  } = useGetLiveDataByCodeQuery(coinDetail?.marketName || "");
  const coinDetails: CoinData =
    coinData?.data?.length > 0 ? coinData?.data[0] : [];

  console.log(">>>>>>>", coinDetails?.currToName);

  if (coinLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <span>
        <Button className="primary" onClick={goBack}>
          Go Back
        </Button>
      </span>
      <div className="content">
        <h1>Coin Details</h1>
        <p>This is Coin Detail.</p>
      </div>
      <div>
        <Card
          className="bitDetailsCard"
          hoverable
          style={{ marginTop: 16 }}
          loading={coinLoading}
        >
          <Meta
            avatar={
              <Avatar
                className="avatarLogo"
                src={`https://d33epyjwhmr3r5.cloudfront.net/assets/currency/${coinDetails?.baseCurrency?.toLowerCase()}.png`}
              />
            }
          />
          <div className="cardCoinTitle">
            <span>
              <h3>{`${
                coinDetails?.currToName ? coinDetails?.currToName : ""
              }`}</h3>
            </span>
            <span>
              <h4>{`${coinDetails?.marketName}`}</h4>
            </span>
          </div>
          <div className="cardDetails">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>24hr Change</th>
                  <th>24hr High (INR)</th>
                  <th>24hr Low (INR)</th>
                  <th>24hr Vol (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {coinDetails?.c24 ? coinDetails?.c24 : "0"}% (
                    {coinDetails?.bid ? coinDetails?.bid : "0"})
                  </td>
                  <td>{coinDetails?.h24 ? coinDetails?.h24 : "0"}</td>
                  <td>{coinDetails?.l24 ? coinDetails?.l24 : "0"}</td>
                  <td>{coinDetails?.v24 ? coinDetails?.v24 : "0"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BitDetails;
