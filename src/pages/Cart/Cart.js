import React from "react";

const Cart = (props) => {
  return (
    <div style={{ padding: "20px", margin: "20px", background: "#cccccc" }}>
      <h2>Cart({props.items.length})</h2>
      {props.items.map((item) => {
        return (
          <div
            key={item.id}
            style={{ border: "1px solid black", margin: "10px 0", position: "relative" }}
          >
            <h4 style={{padding: "10px"}}>{item.title}</h4>
            <p style={{padding: "10px"}}>{item.body}</p>
            <button onClick={props.itemDelete.bind(null, item.id)} style={{position: "absolute", right: "30px", top: "20px"}}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
