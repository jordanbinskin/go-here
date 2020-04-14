import React, { Component } from 'react'
import Tile from './Tile';
import Button from './Button';

import { toggleSelection } from '../redux/actions/toggleSelection';
import { connect } from 'react-redux'

export const ProductTile = ({ title, url, toggleSelection }) => {
    return (
        <Tile>
            <h3>{title}</h3>
            <img src={url} />
            <Button onClick={toggleSelection}>Add to itinerary</Button>
        </Tile>
    )
}

const mapStateToProps = (state) => ({
    selected: state.selected
})

const mapDispatchToProps = dispatch => {
    return {
        toggle: ({title}) => dispatch(toggleSelection(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTile)
