import { ItemDetail } from './ItemDetail';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase';



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const { itemid } = useParams();


    useEffect(() => {
        const db = getFirestore()
        db.collection('items').doc(itemid).get()
            .then(resp => setProducto(resp.data()))

    }, [itemid])

    return (
        <div>
            <ItemDetail jsonpack={producto} />
        </div>
    )
}

export default ItemDetailContainer;