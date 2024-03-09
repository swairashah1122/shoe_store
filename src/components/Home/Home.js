import React from 'react';
import Cards from '../Cards/Cards';
import "./Home.css";

const Home = () => {
    return (
        <>
            {/* <div className="container my-5">
            </div> */}
                <div className="banner"></div>

            <div className="para text-center">
                <h1 >Welcome our shoe store</h1>
                <h3>New Items</h3>
                <Cards />
            </div>
        </>
    )
}

export default Home;