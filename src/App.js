import React, {Component} from 'react';
import SearchProduct from './SearchProduct';
import ProductList from './ProductList';
import {products} from './products';




class App extends Component {
    constructor() {
        super()


        this.state = {
            products: products,
            searchField: ""
        }
    }
    
    onSearchProductChange = (event) => {
        this.setState({searchField: event.target.value})
        const filteredProducts = this.state.products.filter(product => {
            return product.productName.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filteredProducts)
    }

    render() {
            return (
                <div>
                    <SearchProduct searchChange ={this.onSearchProductChange}/> 
                    <ProductList products={this.state.products} />
                </div>
                   
            );
    }



}



export default App;