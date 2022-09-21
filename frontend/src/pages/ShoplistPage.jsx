import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TotalOrder from "../components/TotalOrder";
import ShoplistDetails from "../components/ShoplistDetails";

export default function ShoplistPage() {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const total = cart
    .reduce((acc, product) => acc + product.amount * product.price, 0)
    .toFixed(2);

  const handleAmount = (id, amount) => {
    setCart(
      cart.map((product) =>
        product.id === id ? { ...product, amount } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">Ma commande</h1>
      </div>
      <h2 className="shoplist-title">Mon panier</h2>
      {cart &&
        cart.map((element) => (
          <ShoplistDetails
            key={element.id}
            id={element.id}
            name={element.name}
            price={element.price}
            amount={element.amount}
            imageCart={element.image}
            description={element.description}
            handleAmount={handleAmount}
            deleteProduct={deleteProduct}
          />
        ))}
      <TotalOrder total={total} />

      <div className="container-button-shop">
        <div>
          <button
            className="validate-button"
            type="button"
            onClick={() => navigate("/sendorder")}
          >
            Valider la Commande
          </button>
        </div>
        <div>
          <button
            className="validate-button"
            type="button"
            onClick={() => setCart([])}
          >
            Vider Panier
          </button>
        </div>
      </div>
    </div>
  );
}
