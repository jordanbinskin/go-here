import React from 'react'
import ProductTile from './ProductTile';
import GridParent from './GridParent';

function ProductGrid({ products }) {
    return (
        <GridParent>
           {products.map(p => (<ProductTile title={p.place} url={p.local} />))}
        </GridParent>
    )
}

export default ProductGrid

