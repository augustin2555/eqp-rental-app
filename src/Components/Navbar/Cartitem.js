export default function Cartitem({
  cartList,
  removeCart,
  incQuantity,
  decQuantity,
}) {
  return (
    <ol class="list-group list-group-numbered">
      {cartList.map((item) => {
        return (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold" style={{ marginBottom: "10px" }}>
                {item.name}
              </div>
              {item.actualPrice}-{item.quantity}
              <button
                className="btn btn-outline-info"
                style={{ marginRight: "10px" }}
                onClick={() => incQuantity(item)}
              >
                +
              </button>
              <button
                style={{ marginLeft: "10px" }}
                className="btn btn-outline-info"
                onClick={() => decQuantity(item)}
              >
                -
              </button>
            </div>
            <button
              style={{ marginTop: "25px" }}
              onClick={() => removeCart(item)}
              class="badge bg-primary rounded-pill"
            >
              X
            </button>
          </li>
        );
      })}
    </ol>
  );
}
