import React from 'react';
import './Products.css'
import {BiRupee} from 'react-icons/bi';

const Products = (props) => {

    const {products} = props;

    return (
        <div className="productsSection">

        {/* Page Description */}
        <div className="pageDescription">
        <h1 className="pageDescriptionTitle">Clothing And Accessories</h1>
        <p className="pageDescriptionSubTitle">(Showing 1 – 8 products of 8 products)</p>
        </div>

        <div className="productCards">
        {products.map((product)=>{
            return (
                <div className="singleProduct" key={product.id}>
                <img src={product.imageURl} alt="" className="productImage"/>
                <h1 className="productTitle">{product.productTitle}</h1>
                <p className="productDescription">{product.productDescription}</p>

                {/* Price Section */}
                <div className="priceSection">
                <p className="newPrice"><BiRupee/>{product.newPrice}</p>
                <p className="oldPrice"><BiRupee/>{product.oldPrice}</p>
                <p className="discount">{product.discount}</p>
                </div>

                {/* Size section */}
                <div className="sizeSection">
                <p className="productSizeText">Size</p>
                <p className="productSize">{product.size}</p>
                </div>

                </div>
            )
        })}
        </div>
        
        </div>
    )
}

export default Products
