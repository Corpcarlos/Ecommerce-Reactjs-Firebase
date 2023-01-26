import React, { useState, useContext } from 'react';
import firebase from 'firebase/app';
import '@firebase/firestore';
import { getFirestore } from '../firebase';
import { CartContext } from './CartContext';
import Modal1 from './Modal';


const Ordenes = () => {
    const { total } = useContext(CartContext)
    const [orderId, setOrderid] = useState();
    const [error, setError] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [Nombre, setName] = useState();
    const [Apellido, setApellido] = useState();
    const [openModal, setOpenModal] = useState(false);


    let goodarray = [];



    const proccess = () => {

        if (!Nombre || !Apellido || !phone || !email) {
            alert("Complete el formulario")
            console.log(Nombre, Apellido, email, phone)
            return
        }
        console.log(Nombre, Apellido, email, phone)

        InsertOrder(

            {
                buyer: { Nombre, Apellido, phone, email },
                items: goodarray,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total()
            }
        )
    }


    const InsertOrder = (newOrder) => {
        setOpenModal(true)

        const db = getFirestore()
        const orderDb = db.collection('ordenes')
        orderDb.add(newOrder).then(({ id }) => {
            setOrderid(id); //SUCESS

        }).catch(err => {
            setError(err);
        }).finally(() => {


        });
        console.log("Recibido", error)
    }

    function onPhoneChange(evt) {
        setPhone(evt.target.value);
    }
    function onNameChange(evt) {
        setName(evt.target.value);
    }
    function onEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function onApellidoChange(evt) {
        setApellido(evt.target.value);
    }


    return (
        <>
            <div className="formulario">
                <label>Nombre Completo:</label>
                <br />
                <input className="campos" type='text' name='name' onChange={evt => onNameChange(evt)} ></input>
                <br />
                <label>Apellido:</label>
                <br />
                <input className="campos" type='text' name='name' onChange={evt => onApellidoChange(evt)} ></input>
                <br />
                <label>Numero Telefonico:</label>
                <br />
                <input className="campos" type='text' name='phone' onChange={evt => onPhoneChange(evt)} ></input>
                <br />
                <label>Correo Electronico</label>
                <br />
                <input className="campos" type='text' name='email' onChange={evt => onEmailChange(evt)} ></input>
                <br />
                <br />
                <button className="comprar" type='submit' variant='outline-secondary' onClick={() => proccess()}>Procesar</button>
                <Modal1 isOpen={openModal} orderId={orderId} />
            </div>
        </>
    )
}


export default Ordenes;