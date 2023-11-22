import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import "./styles.css"

const ItemDetail = ({ itemSelect }) => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/cart')
    };

    const {addItem} = useContext(CartContext)
    const addItemCart = () => {
        addItem(itemSelect, count)
    }

    return (
        <div className="detail">
            <h6 className="detail-title" >{itemSelect?.title}</h6>
            <img className="detail-image" src={itemSelect?.image} alt={itemSelect?.title} />

            <p>{itemSelect?.description}</p>
            <p className="price">${itemSelect?.price}</p>
            <p className="p">Stock: {itemSelect?.stock}</p>
            <button className="card-button" onClick={addItemCart}>Guardar en carrito</button>
            <button className="card-button" onClick={handleNavigation}>Finalizar compra</button>
            <ItemCount count={count} setCount={setCount} stock={itemSelect.stock} />
        </div>
    );
};

export default ItemDetail


