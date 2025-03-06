function Order({order}) {
  return (
    <div className="order" style={{ color: "#5F5F5F"}}>
      <p style={{ fontWeight: "600", color: "black", fontSize: "22px" }}>
        {order.name}
      </p>

      <div className="pizzaValues">
        <p
          style={{
            flex: "60%",
            color: "black",
            fontWeight: "700",
            fontSize: "28px",
          }}
        >
          {order.price}₺
        </p>
        <p style={{ flex: "20%", fontWeight: "400", fontSize: "16px" }}>
          {order.score}
        </p>
        <p style={{ fontWeight: "400", fontSize: "16px" }}>
          ({order.comments})
        </p>
      </div>
      <p>{order.description}</p>
    </div>
  );
}
export default Order;
