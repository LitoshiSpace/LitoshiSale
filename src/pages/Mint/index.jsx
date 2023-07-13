//  Dependencies
// ===========================================================

import React, { useState, useEffect } from "react";
import { Mint } from "#layouts";
import "./Mintworking.css";
import { useLocalStorageObj } from "#hooks/useLocalStorageObj";

import info from "#assets/img/info.svg";
import arrow from "#assets/img/arrow.svg";

import { fetchWrapper } from "#services/fetch-wrapper";
import { ColCard, Countdown, Button } from "#components/Elements";

//  Components
// ===========================================================

function Order({ wallet, option, setContent }) {
  // Hooks
  const [orders, setOrders] = useLocalStorageObj("userOrders", {});
  const [data, setData] = useState();

  // Fetch
  useEffect(() => {
    if (wallet && option) {
      fetchWrapper
        .post("https://api.litoshi.app/api/v1/orders", {
          option: option,
          wallet: wallet,
        })
        .then((res) => {
          setData(res);
          if (res?.order) setOrders({ ...orders, [res.order.id]: res.order });
        })
        .catch((err) => setData("Error, can't create an order..."));
    }
  }, []);

  function OrderStatus({ order }) {
    // Status
    let status = [];

    // Deposit tx is found on LTC mempool
    if (order?.isInitialized) {
      status.push(`Deposit transaction found: ${order?.depositTxId}`);
    }

    // Deposit transaction is confirmed
    if (order?.isDepositConfirmed) {
      status.push(`Deposit transaction confirmed!`);
    }

    // Inscription is created and ready to send
    if (order?.isInscriptionConfirmed) {
      status.push(
        `Inscription is created and send to user ${order?.inscriptionId}`
      );
    }

    // txId that sends inscription to user
    if (order?.sendTxId) {
      status.push(`TxID ${order?.sendTxId}`);
    }

    // Done
    if (order?.isSendConfirmed) {
      status.push(`Token send to user! Order is completed.`);
    }

    // Show
    if (status.length === 0) {
      var timeleft = Number(order?.expireTimestamp) * 1000 - Date.now();
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      return (
        <div className="w-full">
          <p className="text-[#fff] text-center font-semibold text-xl">
            Send{" "}
            <span className="font-bold">
              {order?.depositAmount / 100000000} LTC
            </span>
          </p>
          <p className="text-[#fff] text-center font-semibold text-xl">
            to <span className="font-bold">{order?.depositAddress}</span>
          </p>
          <p className="text-[#fff] text-center font-semibold text-xl">
            before {minutes}m {seconds}s
          </p>
        </div>
      );
    } else {
      return (
        <div className="w-full">
          {status.map((line, index) => (
            <p
              key={index}
              className=" text-[#fff] text-center font-semibold text-xl"
            >
              {line}
            </p>
          ))}
        </div>
      );
    }
  }

  function ListOrders({ orders, setOrders }) {
    // Refresh every minute
    useEffect(() => {
      var timer = setInterval(async () => {
        let newOrders = {};
        for (const id in orders) {
          const res = await fetchWrapper.get(
            "https://api.litoshi.app/api/v1/orders/" + id
          );
          if (res?.order) newOrders[id] = res.order;
        }
        setOrders(newOrders);
      }, 3000);
      return function cleanup() {
        clearInterval(timer);
      };
    }, []);

    return Object.keys(orders).map((id) => (
      <div
        key={id}
        className="w-600 border-2 flex flex-col justify-center items-start gap-6 p-6 rounded-xl lg:max-w-[60vw]"
      >
        <ColCard
          className="w-full bg-[transparent] text-xl"
          text="Your amount"
          value={`${orders[id]?.tokenAmount} $LTSI`}
        />
        <ColCard
          className="w-full bg-[transparent] text-xl"
          text="Your address"
          value={orders[id]?.wallet}
        />
        <ColCard
          className="w-full bg-[transparent] text-xl"
          text="Order ID"
          value={orders[id]?.id}
        />
        <OrderStatus order={orders[id]} />
      </div>
    ));
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 ">
      {!data ? (
        <h1 className="text-3xl text-white text-center font-semibold">
          Loading...
        </h1>
      ) : data && !data?.order ? (
        <>
          <h1 className="text-3xl text-white text-center font-semibold">
            {data}
          </h1>
          <Button
            className="bg-[#ffffff50] px-6 py-3"
            onClick={() => setContent(null)}
          >
            <span className="text-xl text-white text-center font-semibold uppercase">
              Return to setup
            </span>
          </Button>
        </>
      ) : null}
      {Object.keys(orders).length ? (
        <ListOrders orders={orders} setOrders={setOrders} />
      ) : null}
    </div>
  );
}

function Setup({ wallet, setWallet, option, setOption, content, setContent }) {
  // Constants
  const options = ["500$LTSI", "1000$LTSI", "1500$LTSI", "2000$LTSI"];

  // Functions

  function handleOptionChange(event) {
    const value = event.target.value;
    setOption(value);
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setWallet(value);
  }

  const createOrder = (event) => {
    if (wallet && options.includes(option)) {
      setContent("start");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 py-[3%]">
      <p className="w-full text-white text-center text-xl font-semibold">
        It's time to choose the address to which you want to receive your $LTSI
        tokens
      </p>
      <div className="min-w-[600px] bg-[transparent] rounded">
        <input
          onChange={handleInputChange}
          className="w-full bg-transparent text-white border-2 border-grey rounded-lg text-lg text-start p-2"
          type="text"
          placeholder="Your LTC address"
          defaultValue={wallet}
        />
      </div>
      <div className="flex gap-8 items-end">
        <div className="flex">
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <h6 className="text-white text-center font-semibold uppercase">
              Choose an option: {option}
            </h6>
            <select
              value={option}
              className="bg-[transparent]  text-white border-2 border-grey rounded-lg px-6 py-3"
              onChange={handleOptionChange}
            >
              {options.map((item) => (
                <option className="text-black" key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button
          className="bg-[transparent] border-2 border-grey px-6 py-3"
          onClick={() => createOrder()}
        >
          <span className="text-xl text-white text-center font-semibold uppercase">
            Create a new order
          </span>
        </Button>
      </div>
    </div>
  );
}

//  Page
// ===========================================================

export default function Page() {
  // Variables
  const [wallet, setWallet] = useState();
  const [option, setOption] = useState("500$LTSI");
  const [content, setContent] = useState();

  return (
    <Mint>
      {!content ? (
        <Setup
          wallet={wallet}
          setWallet={setWallet}
          option={option}
          setOption={setOption}
          content={content}
          setContent={setContent}
        />
      ) : (
        <Order
          wallet={wallet}
          option={option}
          content={content}
          setContent={setContent}
        />
      )}
    </Mint>
  );
}
