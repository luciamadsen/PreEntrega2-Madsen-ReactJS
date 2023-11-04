import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ data }) => {
    const [cartQty, setCartQty] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (qty) => {
        setCartQty(qty);
        const item = {
            id: data.id,
            title: data.title,
            price: data.price,
        };
        addItem(item, Number(qty));
    }

    const commonDetail = (
        <div className="detail">
            <div className="detail-card">
                <img className="detail-card-img" src={data.image} alt="product-image" />
                <div className="detail-card-desc">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <h3 className="detail-card-price">$ {data.price}</h3>
            </div>
        </div>
    );

    if (!data) return null;

    if (cartQty > 0) {
        return (
            <>
                {commonDetail}
                <p className="detail-card-stock">Stock: {data.stock}</p>
                <Link to='/cart' className="finalizar-compra-link">Finalizar compra</Link>
            </>
        );
    }

    return (
        <>
            {commonDetail}
            <p className="detail-card-stock">Cantidad Disponible: {data.stock}</p>
            <ItemCount stock={data.stock} onAdd={handleOnAdd} />
        </>
    );
}