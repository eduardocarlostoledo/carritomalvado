import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { getTotalProductsInCart } from '../reducer';

export default function CartSummry({cart}){
    const totalProducts = getTotalProductsInCart(cart)
    return (
      <div className="contenedor_cart_nav">
        <FaShoppingCart className="icon_cart"/>
        <div className="contenedor_total_products">
          <p 
          className="total_products">{totalProducts}</p>
        </div>
      </div>
    );
  }