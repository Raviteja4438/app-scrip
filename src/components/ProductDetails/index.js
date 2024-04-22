import {BsHeart} from 'react-icons/bs'
import './index.css'

const ProductDetails = ({image, title, price}) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className='product-image' />
            <h2 className='product-title'>{title}</h2>
            <div className="amount-like-container">
                <p className='amount'>${price}</p>
                <BsHeart />
            </div>
        </div>
    )
}

export default ProductDetails

