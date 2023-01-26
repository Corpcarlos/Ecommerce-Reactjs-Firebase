import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";


const CartWidget = () => {

    const { cartlength } = useContext(CartContext);
    console.log("Valor Total en Widget");
    console.log("cargando CartWidget");


    return (
        <div>

            <Link className="carrito" to={'/cart'}>{cartlength() > 0 && cartlength()}
                <FontAwesomeIcon icon={faShoppingCart} /></Link>

        </div>
    )
}


export default CartWidget