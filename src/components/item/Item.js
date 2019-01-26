import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    background-color: white;
    margin-bottom: 15px;

`;

const ItemHeader = styled.h3`
    font-size:25px;
`;

const ItemCountry = styled.span`
    font-size: 14px;
    color: #aeaeae;
    display: block;
`;
const ItemCategory = styled.span`
    font-size: 20px;
    color: #aeaeae;
    display: block;
`;

const ItemImg = styled.img`
    height: 200px;
`

const Item = ({name, category, country, img_url}) => {
    return (
        <ItemBlock>
            <ItemHeader>{name}
                <ItemCategory>{category}</ItemCategory>
                <ItemCountry>{country}</ItemCountry>
            </ItemHeader>
            <ItemImg src={img_url}/>
        </ItemBlock>
    )
}

export default Item;