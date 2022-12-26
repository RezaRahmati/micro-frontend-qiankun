
import { Column, DataGrid } from 'devextreme-react/data-grid';
import React, { useEffect, useState } from 'react';

export const ProductList = () => {
    const priceFormat = { style: 'currency', currency: 'CAD', useGrouping: true, minimumSignificantDigits: 3 };

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
        <DataGrid
            dataSource={ products }
            keyExpr="id"
            showBorders={ true }
        >
            <Column dataField="title" caption="Title"></Column>
            <Column dataField="price" caption="Price" format={ priceFormat }></Column>
            <Column dataField="discountPercentage" caption="Discount %"></Column>
            <Column dataField="rating" caption="Rating"></Column>
            <Column dataField="stock" caption="Stock"></Column>
        </DataGrid>
    </>
}