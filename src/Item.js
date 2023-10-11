import styles from './Item.module.css';

function Card ({ product }) {
    return (
        <div className={styles.product}>
            <img src={product.thumbnail} />
            <div className={styles.title}>{product.title}</div>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.info}>
                <p><span style={{display: 'inline-block', marginRight: '5px'}}>Brand:</span>{product.brand}</p>
                <p><span>Category:</span>{product.category}</p>
                <p><span>Stock:</span>{product.stock}</p>
            </div>
            <button type={"button"} className={styles.cta}>
                <img src={'/shopping-cart_5548075.png'} width={24} height={24}/>
            </button>
        </div>
    )
}

function Item({product}) {




    return (
        <li className={styles.root}>
           <Card product={product} />
        </li>
    );
}

export default Item;
