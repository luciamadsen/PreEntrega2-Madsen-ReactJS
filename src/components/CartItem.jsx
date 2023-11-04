import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartItem = ({data}) => {
    const { removeItem } = useContext(CartContext);
    
    const handleClick = () => {

        const item = {
            id: data.id,
            qty: data.qty,
            price: data.price
        }
        removeItem(item);
    }
    
    return (
        <>
            {
                data && (
                    <div className="cart-item">
                        <h3 className="cart-item-title">{data.title}</h3>
                        <p className="cart-item-info">$ {data.price}</p>
                        <p className="cart-item-info">Cant: {data.qty}</p>
                        <p className="cart-item-info">{Number(data.qty*data.price).toFixed(2)} $</p>
                        <button className="medium-button"  onClick={handleClick}>Eliminar</button>
                    </div>
                )
            }
        </>
    )
}