import { useLocation } from 'react-router-dom';

const ProductPage = () => {
    const location = useLocation();
    const data = location.state; 

    return (
        <div>
            <h1>{data.name}</h1>
            <p> {data.price}</p>
        </div>
    );
};
export default ProductPage;