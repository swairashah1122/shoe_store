import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import items from "../../items.json";

// import Component
import NotFound from "../NotFound";

const ViewItems = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = items[id];

    if (!item) {
        return (
            <>
                <NotFound />
                <div className="container text-center">
                    <button onClick={() => navigate('/products')} className='btn btn-danger'>Go Back to Products</button>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-evenly flex-wrap">
                    <div className="product_image">
                        <img src={item.image} className='image-fluid' width='300px' alt={item.name} />
                    </div>

                    <div className="card w-100 product_description">
                        <div className="card-body">
                            <div className="card-title">
                                <h2>{item.name}</h2>
                                <h3>
                                    Best Price:  <sup>$</sup><span>{item.price}</span><sup><del>{item.delPrice}</del></sup>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewItems;