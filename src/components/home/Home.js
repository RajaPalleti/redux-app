import React from 'react';

function Home(props) {
    console.log('Home', props);
    return(
        <div>
            <h1>Home Component</h1>
            
            <div className="item">
                <img src="https://5.imimg.com/data5/LG/TA/IN/SELLER-7485732/product-catalog-app-service-500x500.png" width="150px" alt="product"/>
                <span>1000 Rs/-</span>
                <button onClick={()=>props.addToCartHandler({price: 1000, name: 'Motorola'})}>ADD TO CART</button>
                <button onClick={()=>props.removeToCartHandler()}>REMOVE TO CART</button>
            </div>
        </div>
    )
}
export default Home;