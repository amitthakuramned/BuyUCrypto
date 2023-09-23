import React, { useEffect, useState } from "react";
import {
  useGetCurrencyQuery,
  useGetLiveDataAllQuery,
} from "../service/appSlice";
import Table from "../components/table/table";
import { AppRoutes } from "../routes/appRoutes";
import { useNavigate } from "react-router-dom";

const MarketPage = (props: any) => {
  const navigate = useNavigate();
  const {
    data: currencyData,
    error: currencyError,
    isLoading: currencyLoading,
  } = useGetCurrencyQuery("");
  const handelSelectedList = (item: any) => {
    var x = { ...item, marketName: "USDT-" + item?.code };
    navigate(AppRoutes.BITDETAILS, { state: { coinDetail: x } });
  };
  const colum = [
    {
      title: "Coin",
      width: 250,
      key: "name",
      dataIndex: ["name", "code"],
      ellipsis: true,
      sorter: (a: any, b: any) => a?.name?.localeCompare(b.name),
      render: (text: any, row: any) => {
        return (
          <div className="CoinLogo" onClick={() => handelSelectedList(row)}>
            <span>
              <img
                className="item-cover"
                src={`https://d33epyjwhmr3r5.cloudfront.net/assets/currency/${row[
                  "code"
                ].toLowerCase()}.png`}
                alt=""
                onError={(e: any) => {
                  e.target.src = "not found";
                }}
              />
            </span>
            <span>
              <h4>{row["name"]}</h4>
            </span>
          </div>
        );
      },
    },
    {
      width: 200,
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a?.maxDeposit - b?.maxDeposit,
      render: (text: any, row: any) => {
        return (
          <div className="CoinTitle" onClick={() => handelSelectedList(row)}>
            <h4>{row["name"]}</h4>
          </div>
        );
      },
    },
    {
      width: 150,
      title: "Max Withdraw",
      dataIndex: "maxWithdraw",
      key: "maxWithdraw",
      sorter: (a: any, b: any) => a?.maxWithdraw - b?.maxWithdraw,
      render: (text: any, row: any) => {
        return (
          <div onClick={() => handelSelectedList(row)}>
            <h4>₹{row["maxWithdraw"]}</h4>
          </div>
        );
      },
    },
    {
      width: 150,
      title: "Min Deposit",
      dataIndex: "minDeposit",
      key: "minDeposit",
      sorter: (a: any, b: any) => a?.minDeposit - b?.minDeposit,
      render: (text: any, row: any) => {
        return (
          <div onClick={() => handelSelectedList(row)}>
            <h4>₹{row["minDeposit"]}</h4>
          </div>
        );
      },
    },
    {
      width: 150,
      title: "Min Withdraw",
      dataIndex: "minWithdraw",
      key: "minWithdraw",
      sorter: (a: any, b: any) => a?.minWithdraw - b?.minWithdraw,
      render: (text: any, row: any) => {
        return (
          <div onClick={() => handelSelectedList(row)}>
            <h4>₹{row["maxWithdraw"]}</h4>
          </div>
        );
      },
    },
    {
      width: 150,
      title: "With Fee",
      dataIndex: "withFee",
      key: "withFee",
      sorter: (a: any, b: any) => a?.withFee - b?.withFee,
      render: (text: any, row: any) => {
        return (
          <div onClick={() => handelSelectedList(row)}>
            <h4>₹{row["withFee"]}</h4>
          </div>
        );
      },
    },
    {
      width: 150,
      title: "Dep Fee",
      dataIndex: "depFee",
      key: "depFee",
      sorter: (a: any, b: any) => a?.depFee - b?.depFee,
      render: (text: any, row: any) => {
        return (
          <div className="CoinTitle" onClick={() => handelSelectedList(row)}>
            <h4>₹{row["depFee"]}</h4>
          </div>
        );
      },
    },
    {
      width: 150,
      title: "Network",
      dataIndex: "network",
      key: "network",
      sorter: (a: any, b: any) => a?.network - b?.network,
    },
  ];

  if (currencyLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <div className="content">
        <h1>Market </h1>
        <p>This is a Market Sheet.</p>
        {currencyData && (
          <div>
            <Table
              className={"coinTable"}
              columns={colum}
              dataSource={currencyData?.data}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default MarketPage;
