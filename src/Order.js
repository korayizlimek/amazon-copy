import moment from "moment"; // timestamp icin
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment
          .unix(order.data.created)
          .format("Do MMMM YYYY, h:mma")}
      </p>

      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat //paranin $1,000,000 yapiyor
        renderText={(value) => (
          <h3 className="order__total">
            Order Total: {value}{" "}
          </h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        tousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
