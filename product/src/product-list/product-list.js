
import React, { useEffect, useState } from 'react';

export const ProductList = () => {
    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        fetch( 'http://localhost:4000/api/product' )
            .then( ( response ) => response.json() )
            .then( ( data ) => {
                console.log( data );
                setProducts( data.products );
            } )
            .catch( ( err ) => {
                console.log( err.message );
            } );
    }, [] );

    return <>
        <h1>ProductList</h1>
        { products.map( ( product ) => {
            return (
                <div className="product-card" key={ product.id }>
                    <h2 className="product-title">{ product.title }</h2>
                    <p className="product-price">{ product.price }</p>
                </div>
            );
        } ) }
    </>
}