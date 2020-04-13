import React, { Component } from 'react'
import Tile from './Tile';
import Button from './Button';

import { connect } from 'react-redux'

export const ProductTile = ({title, url}) => {
    return (
        <Tile>
            <h3>{title}</h3>
            <img src={url} />
            <Button>Add to itinerary</Button>
        </Tile>
    )
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTile)
