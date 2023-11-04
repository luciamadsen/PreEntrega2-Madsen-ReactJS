import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const { id: itemId } = useParams();
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "products", itemId);
        getDoc(item).then((snapshot) => {
            setData({ id: snapshot.id, ...snapshot.data() })
        })
    }, [itemId]);

    return (
        <div className='detail-container'>
            <ItemDetail data={data} />
        </div>
    )
}