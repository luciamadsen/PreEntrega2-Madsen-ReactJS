import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const {id: catId} = useParams();
    useEffect(() => {
        const db = getFirestore();
        let items;
        if(catId) {
            items = query(collection(db, "products"), where("category", "==", catId));
        } else {
            items = query(collection(db, "products"), limit(12));
        }
        
        getDocs(items).then((snapshot) => {
            if (snapshot.size != 0) {
                setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }) ) );
            } else {
                setData([]);
            }
            setLoading(false);
        })
        
    },[catId]);
    
    return (
        <div className="item-container">
            <ItemList data={data} loading={loading} />
        </div>
    );

};

export default ItemListContainer;