//  Dependencies
// ===========================================================

import React, { useState, useEffect } from "react";
import { fetchWrapper } from "#services/fetch-wrapper";
import { ColCard, Countdown, Button } from "#components/Elements";
import { useLocalStorageObj } from "#hooks/useLocalStorageObj";

//  Components
// ===========================================================

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

function CreateOrder({ wallet, option, orders, setOrders }) {
  // Variables
  const [data, setData] = useState();

  // Create order
  function getOrder() {
    fetchWrapper
      .post("https://api.litoshi.app/api/v1/orders", {
        option: option,
        wallet: wallet,
      })
      .then((res) => {
        setData(res);
        if (res?.order) setOrders({ ...orders, [res.order.id]: res.order });
      })
      .catch((err) => console.log("err", err));
  }

  // No order
  if (!data) {
    return (
      <Button className="bg-[#ffffff50] px-6 py-3" onClick={() => getOrder()}>
        <span className="text-xl text-white text-center font-semibold uppercase">
          Create order
        </span>
      </Button>
    );
  }

  // Error
  if (data && !data?.order) {
    return (
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <h1 className="text-3xl text-black text-center font-semibold">
          {data}
        </h1>
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
    <div className="w-full flex flex-col justify-center items-center p-6 gap-6 bg-[#00000050] rounded-xl lg:max-w-[60vw]">
      <ColCard
        className="w-full h-28 bg-[#ffffff40] text-xl"
        text="Order ID"
        value={orders[id]?.id}
      />
      <ColCard
        className="w-full h-28 bg-[#ffffff40] text-xl"
        text="Order Amount"
        value={`${orders[id]?.tokenAmount} $LTSI`}
      />
      <ColCard
        className="w-full h-28 bg-[#ffffff40] text-xl"
        text="Your Wallet"
        value={orders[id]?.wallet}
      />
      <OrderStatus order={orders[id]} />
    </div>
  ));
}

//  Page
// ===========================================================

function Page() {
  // Hooks
  const [orders, setOrders] = useLocalStorageObj("userOrders", {});

  // Variables
  const [wallet, setWallet] = useState(
    "ltc1q33srfx950rvu3nfzqs5fd3pes6r0gm46rw7uq3"
  );
  const [option, setOption] = useState("500$LTSI");

  console.log(window.localStorage);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 p-6">
      {wallet && Object.keys(orders).length ? (
        <ListOrders orders={orders} setOrders={setOrders} />
      ) : null}
      {!wallet ? (
        <h6 className="text-white text-center font-semibold uppercase">
          Connect your wallet
        </h6>
      ) : !option ? (
        <h6 className="text-white text-center font-semibold uppercase">
          Choose an option
        </h6>
      ) : (
        <CreateOrder
          wallet={wallet}
          option={option}
          orders={orders}
          setOrders={setOrders}
        />
      )}
    </div>
  );
}

export default Page;
