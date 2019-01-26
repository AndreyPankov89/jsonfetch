import React, {Component} from 'react';
import GetFromJSON from '../../service/getData'
import ItemList from '../item-list';
import styled from 'styled-components';

const SectionHeader = styled.h2`
    font-size: 30px;
    text-align: center;
`
const Container = styled.div`
    
    width: 900px;
    margin: 0 auto;
`

export default class App extends Component{


    constructor(props){
        super(props);

        this.state = {
            data: {}
        }

        
        const data = new GetFromJSON();
        data.getJson()
            .then((result) => {
                this.setState(() => {
                    return {
                        data: result
                    }
                })
            });
    }

    render(){


        const {fruits, vegetables} = this.state.data;
        let fruitsList = [];
        if (fruits){ 
            fruitsList = fruits.map((item)=> {
                return { 
                    name: item.name,
                    category: item.fruit_category,
                    country: item.country,
                    img_url: item.img_url
                }
            })
        }

        let vegetablesList = [];
        if (fruits){ 
            vegetablesList = vegetables.map((item)=> {
                return { 
                    name: item.name,
                    category: item.vegetable_category,
                    country: item.country,
                    img_url: item.img_url
                }
            })
        }

        return (
            <Container>
            <SectionHeader>Fruits</SectionHeader>
            <ItemList posts={fruitsList}/>
            <SectionHeader>Vegetables</SectionHeader>
            <ItemList posts={vegetablesList}/>
            </Container>
        )
    }
}
