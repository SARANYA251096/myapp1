import React, { Fragment } from "react";

function Cart({ cartItems, removeFromCart }) {
  return (
    <>
      {cartItems.length === 0 ? (
        <div>No items in cart</div>
      ) : (
        <>
          <ol className="list-group list-group-numbered">
            {cartItems.map((items) => {
              return (
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{items.name}</div>
                    Rs.{items.price}
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(items);
                    }}
                    className="badge bg-primary rounded-pill"
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ol>
          <h3>
            Total :Rs.{" "}
            {cartItems.reduce((prev, curr) => {
              return (prev = prev + curr.price);
              // console.log(prev);
            }, 0)}{" "}
          </h3>
        </>
      )}
    </>
  );
}

export default Cart;
