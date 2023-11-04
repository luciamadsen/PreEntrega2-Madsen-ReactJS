import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { totCartQty } = useContext(CartContext);

    return totCartQty > 0 && (
        <div className="nav-cart">
            <img src="/cart_icon.jpg" alt="cart-icon" className="icon" />
            <span>{totCartQty}</span>
        </div>
    );
}

export default CartWidget;