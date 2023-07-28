import { useMemo } from 'react';
import { fetchProductByLimit } from "../../utils/utils.js";
import "./SearchProduct.css";
import { useOnlineStatus } from '../hooks/useOnlineStatus.js';

const SearchProduct = ({products, limit, theme}) => {

    // const filteredProducts = fetchProductByLimit(limit);
    const filteredProducts = useMemo(
        () => fetchProductByLimit(limit), 
        [products, limit] //dependency array which checks if there is some changes, react will re-call fetchProductByLimit function
    );

    const isOnline = useOnlineStatus();

    return <>
        <div className={theme}>
        {
            filteredProducts.map((item, index) => {
                return <p key={index}>{item.title} - ${item.price.toFixed(1)}</p>
            })
        }

        {
            isOnline ? "Online" : "Offline"
        }
        </div>
    </>;
}

export default SearchProduct;