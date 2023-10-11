import { useState, useEffect } from 'react'
import styles from './List.module.css';
import Item from "./Item";

function List() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <ul className={styles.list}>
            {data && data?.products.map((item) => <Item product={item} /> )}
        </ul>
    );
}

export default List;
