import styled from 'styled-components';
import React, { useState } from 'react'


const StyledItem = styled.li`
    display: block;
`
function SideBarList({ items }) {
    return (
        <ul>
            {items.map(item => 
                <StyledItem>
                    {item.text}
                </StyledItem>
            )}
        </ul>
    )
}

export default SideBarList
