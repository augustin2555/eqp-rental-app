import React from "react";
const inrIcon = "₹";

function Card({ data, addToCart, cartList }) {
  return (
    <div
      className="col-lg-3 mb-4 element-container"
      style={{ marginRight: "60px" }}
    >
      <div className="card" style={{ width: "18rem" }}>
        {/* <h5 className="fs-5 bg-secondary text-white fw-semibold">{`Order ID:${product.id}`}</h5> */}
        <img
          style={{ height: 200, width: 250 }}
          src={data.imgUrl}
          className="card-img-top"
          alt={`${data.name}Vehicle-immage`}
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
          <p className="fw-bold price-container" style={{ color: "green" }}>
            {inrIcon}
            {data.actualPrice}
          </p>
          <button
            disabled={cartList.some((item) => item._id === data._id)}
            class="btn btn-primary"
            onClick={() => addToCart(data)}
          >
            Add to Rent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
