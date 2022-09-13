import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="inoui">
        <Link to="/forms">
          <img
            src="https://res.cloudinary.com/dbkscupri/image/upload/v1662994211/headerP3/inoui_irksbk.png"
            alt="TGV Inoui"
          />
        </Link>
      </div>

      <div className="connect">
        <Link to="/forms">
          <img
            src="https://res.cloudinary.com/dbkscupri/image/upload/v1663000036/picto/client_nrxrmb.png"
            alt="connection"
          />
        </Link>
      </div>
      <div className="panier">
        <Link to="/forms">
          <img
            src="https://res.cloudinary.com/dbkscupri/image/upload/v1662994788/headerP3/panier2_q3fq57.png"
            alt="panier"
          />
        </Link>
      </div>
    </div>
  );
}
