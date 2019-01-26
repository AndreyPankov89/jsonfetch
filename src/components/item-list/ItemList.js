import React from 'react';
import styled from 'styled-components';
import Item from '../item'
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ItemList = ({posts})=>{

    const elements = posts.map((item) => {
        const {...itemProps} = item;

        return (
            <Item {...itemProps} />
        )
    })
    return(
        <ItemContainer>
            {elements}
        </ItemContainer>
    )
}

export default ItemList;