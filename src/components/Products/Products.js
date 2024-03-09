import React from 'react';
import "./Products.css";
import { Link } from 'react-router-dom';
import items from "../../items.json";
import Cards from "../Cards/Cards";
const Products = () => {
    return (
        <>
            <div >
                <div className="product"></div>
            </div>
            <div className="container my-5">
                <div className="container">
                    <h1>New Release</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {Object.keys(items).map((keyName) => {
                        const product = items[keyName];
                        return (
                            <div className='col my-5' key={product.id}>
                                <div className="card h-100">
                                    <div>
                                        <img src={product.image} className="card-img-top" alt={product.name} />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            {product.name}
                                        </div>
                                        <div className="card-text">
                                            <sup>$</sup><span>{product.price}</span><sup><del>{product.delPrice}</del></sup>
                                            <span>
                                                <Link className='btn btn-dark ms-4' key={keyName} to={`/products/${keyName}`}>
                                                    View item
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="container">
                <div className="container">
                    <h1>Best Release</h1>
                </div>
                <Cards />
            </div>
        </>
    )
}
export default Products;