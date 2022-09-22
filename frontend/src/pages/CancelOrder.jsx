import { useEffect, useState } from "react";

export default function CancelOrder() {
  const savedShoplist = localStorage.getItem("shoplist");
  const [shoplist, setShoplist] = useState(
    savedShoplist ? JSON.parse(savedShoplist) : []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(shoplist));
  }, [shoplist]);

  useEffect(() => {
    setShoplist([]);
  }, []);

  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">Ma commande</h1>
      </div>
      <h2 className="shoplist-title">Mon panier</h2>
      <p className="empty-cart">Votre commande a été annulée.</p>
    </div>
  );
}
