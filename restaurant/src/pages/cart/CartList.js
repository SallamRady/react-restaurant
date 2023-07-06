import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartList.css";
import { cartContext } from "../../context/cart.context";

const CartList = () => {
  let {
    items,
    clearCart,
    removeCartitem,
    decreaseCartitem,
    addCartitem,
  } = useContext(cartContext);

  const theRow = items.map((item) => {
    return (
      <tr key={item?.id}>
        <td>{item?.name}</td>
        <td>{item?.price} $</td>
        <td>{item?.amount} $</td>
        <td>{item?.quantity}</td>
        <td>
          {/* increase */}
          <IconButton onClick={() => addCartitem(item)} aria-label="Increase">
            <AddBoxRoundedIcon />
          </IconButton>
          {/* decrease */}
          <IconButton
            onClick={() => decreaseCartitem(item.id)}
            aria-label="Decrease"
          >
            <IndeterminateCheckBoxRoundedIcon />
          </IconButton>
          {/* delete */}
          <IconButton
            onClick={() => removeCartitem(item.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </td>
      </tr>
    );
  });
  const dataTable = (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{theRow}</tbody>
    </table>
  );

  return (
    <div className="cartList">
      <h1>Cart Items</h1>
      {items.length === 0 && <p className="alertMsg">Your cart is empty.</p>}
      {items.length > 0 && dataTable}
      {items.length > 0 && (
        <div className="orderActions">
          <button className="btn">
            Order Now
          </button>
          <button className="btn clear" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartList;
