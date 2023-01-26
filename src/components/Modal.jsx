import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



const Modal1 = ({ isOpen, orderId }) => {

    const [abierto, setAbierto] = useState(isOpen)

    useEffect(() => {
        if (isOpen !== abierto) {
            setAbierto(isOpen)
        }
    }, [abierto, isOpen])


    return (
        <>
            <div>
                <Modal isOpen={abierto}>
                    <ModalHeader className="centrar">
                        FELICIDADES TU COMPRA SE REALIZO CON EXITO
                    </ModalHeader>
                    <ModalBody>
                        Acabas de realizar una compra, en breve te llegara un correo de confirmacion a tu email.<br />
                        El ID de tu orden de compra es: {orderId}.
                    </ModalBody>
                    <ModalFooter>
                        <Link to={'/'}><Button color="success">Finalizar</Button></Link>
                        <Link to={'/categories'}><Button color="success">Seguir Comprando</Button></Link>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default Modal1;