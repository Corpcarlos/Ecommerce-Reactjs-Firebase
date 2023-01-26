import { Table } from 'react-bootstrap';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import DelButton from './DelButton';
import '@firebase/firestore';



const Cart = () => {
    const { carts, cartlength, total } = useContext(CartContext);

    let goodarray = [];
    let copyarray = [];
    let ListTemplate;
    let i = 0;


    if (cartlength() > 0) {
        let itemidarray = [];

        while (i < carts.length) {
            copyarray[i] = carts[i];
            itemidarray[i] = carts[i].itemid;
            i++;
        }


        itemidarray = [...new Set(itemidarray)];
        i = 0;
        let id;
        let j = 0;
        let price;
        let name;
        while (i < itemidarray.length) {
            let cantidad = 0;
            for (j = 0; j < copyarray.length; j++) {
                if (copyarray[j].itemid === itemidarray[i]) {
                    cantidad = copyarray[j].count + cantidad;
                    price = copyarray[j].price;
                    name = copyarray[j].title;
                }

            }

            id = itemidarray[i];
            goodarray.push({ id, name, cantidad, price })
            console.log("federico", copyarray)

            i++;
        }

        ListTemplate = goodarray.map((element) => (<tr key={element.id}><td>{element.name}</td><td>{element.cantidad}</td><td>{element.price}</td><td><DelButton itemid={id} /></td></tr>));
        console.log("goodarray:" + goodarray[0].id);

        return (
            <>
                <Table className="clarito">
                    <thead>
                        <tr className="fonts">
                            <th>Item</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Quitar Item</th>
                        </tr>
                    </thead>
                    <tbody className="fonts">
                        {ListTemplate}
                        <tr className="fonts">
                            <td >Total a Pagar:</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td>{total()}</td>
                        </tr>
                    </tbody>
                </Table>
                <Link to={`/reserva`}><button className="pagobtn">Ir a Pagar</button></Link>
                <Link to={`/categories`}><button className="pagobtn">Seguir Comprando</button></Link>
            </>
        )
    }
    else {
        return (
            <div className="cesta">
                <badge>El carro esta Vacio, Selecciona tus productos
                    <Link to={'/'}><br />
                        <button className="regreso">Volver</button>
                    </Link>
                </badge>
            </div>
        )
    }
}
export default Cart;