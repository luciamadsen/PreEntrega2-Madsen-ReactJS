import { NavLink } from "react-router-dom";

export const Item = ({ data }) => {
  return (
    <div className="item">
      <NavLink className="item-card" to={`/item/${data.id}`}>
        <img className="item-card-img" src={data.image} alt="product-image" />
        <h5 className="item-card-title">{data.title}</h5>
        <p className="item-card-price">$ {data.price}</p>
      </NavLink>
    </div>
  );
};