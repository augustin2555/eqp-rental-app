import React, { useEffect, useState } from "react";
import Card from "./Card";
import Cartitem from "./Cartitem";
import Axios from "axios";
import Homepage from "../Homepage/Homepage";
const productsUrl = "https://node-product-api-dev.onrender.com/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(productsUrl)
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        if (data.length > 0) {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);
  // const products = [
  //   {
  //     name: "Jcb",
  //     imgUrl:
  //       "https://images.jdmagicbox.com/quickquotes/images_main/jcb-dozer-2022905344-hvg8zmm8.jpg",
  //     description: "For Excavation Purpose in pond,canals and road clearance",
  //     actualPrice: 2000,
  //   },
  //   {
  //     name: "Roller",
  //     imgUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumV9r0vK4XNJYTdv1uWNge73MAsAwudYsoA&usqp=CAU",
  //     description: "For the purpose of road works and many more works",
  //     actualPrice: 3490,
  //   },
  //   {
  //     name: "20T Crane",
  //     imgUrl:
  //       "https://3.imimg.com/data3/NF/IT/MY-9506927/mobile-crane-20-ton-500x500.gif",
  //     description: "For shifting machineries and heavy materials",
  //     actualPrice: 10000,
  //   },
  //   {
  //     name: "Transit Mixer",
  //     imgUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRk3SBaqt87KPj9KePaHnN0WKP2fhL-JnVQ&usqp=CAU",
  //     description:
  //       "Ready mix concrete can get by the transist mixer from one place to another",
  //     actualPrice: 8000,
  //   },
  //   {
  //     name: "Dozer",
  //     imgUrl:
  //       "https://s7d2.scene7.com/is/image/Caterpillar/CM20180928-35976-27789?$cc-g$",
  //     description: "pushing or dozing materials or metals and many more ",
  //     actualPrice: 7000,
  //   },
  //   {
  //     name: "Hydraulic Crane",
  //     imgUrl:
  //       "https://5.imimg.com/data5/QL/LL/MY-7957012/fork-lift-500x500.jpg",
  //     description: "For the purpose of lifting the machines and materials",
  //     actualPrice: 12000,
  //   },
  //   {
  //     name: "Tractor",
  //     imgUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYH9S8IaUzYHGM6g_zEWhQK45napr77wDVUQ&usqp=CAU",
  //     description:
  //       "for the purpose carrying goods and can utilise for agricultural works",
  //     actualPrice: 7000,
  //   },
  //   {
  //     name: "Truck",
  //     imgUrl:
  //       "https://images.livemint.com/img/2020/08/13/600x338/press-13aug20-lowres_1597332021367_1597332027886.jpg",
  //     description: "Truck for carring materials like sand,metals and many more",
  //     actualPrice: 6000,
  //   },
  // ];

  const [cartList, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (product) => {
    setCart([...cartList, { ...product, quantity: 1 }]);
    setTotal(total + product.actualPrice);
  };

  let removeCart = (cartItem) => {
    let itemIndex = cartList.findIndex((item) => cartItem._id === item._id);
    cartList.splice(itemIndex, 1);
    setCart([...cartList]);
    setTotal(total - cartItem.actualPrice * cartItem.quantity);
  };

  const incQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex((item) => cartItem._id === item._id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
    setCart([...cartList]);
    setTotal(total + cartItem.actualPrice);
  };

  const decQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex((item) => cartItem._id === item._id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity - 1;
    setCart([...cartList]);
    setTotal(total - cartItem.actualPrice);
  };

  return (
    <>
      <div>
        <Homepage />
      </div>
      <div className="container">
        <div className="row mt-3 ">
          <div className="col-lg-9">
            <div className="row" style={{ marginRight: "90px" }}>
              {products.map((data, index) => {
                return (
                  <Card
                    cartList={cartList}
                    data={data}
                    key={index}
                    addToCart={addToCart}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Cart</h4>
            <Cartitem
              cartList={cartList}
              removeCart={removeCart}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
              total={total}
            />
            <h4 style={{ marginTop: "30px", marginLeft: "100px" }}>
              Total : {total}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
