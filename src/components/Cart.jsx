import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"

export const Cart = () => {
    const { cart, totAmount, clearCart } = useContext(CartContext)

    const handleClearCart = () => {
        clearCart();
    }

    return (
        <>
            {cart.length > 0 ? (
                <div className="cart">
                    {cart.map(item => 
                        <CartItem key={item.id} data={item} />
                    )}
                    <div className="cart-foot">
                        <h2>Total: {Number(totAmount).toFixed(2)} $</h2>
                        <button onClick={handleClearCart} className="small-button">Vaciar Carrito</button>
                    </div>
                    <Link to='/checkout'><button className="large-button">Finalizar Compra</button></Link>
                </div>
            ) : (
                <div className="cart-empty">
                    <p>Carrito Vacío</p>
                    <Link to="/"><button className="large-button">Volver</button></Link>
                </div>
            )}
        </>
    )
}