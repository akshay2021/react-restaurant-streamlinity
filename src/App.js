import React, { Component } from 'react';
import './App.css';
import Categories from './components/Categories';
import ItemsTable from './components/ItemsTable';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      items: [],
      selectedCategory: ''
    }
  }
  componentDidMount() {
    axios.get('https://stream-restaurant-menu-svc.herokuapp.com/category')
    .then(({data}) => {
        this.setState({
          categories: data
        });
    });
  }
  getItems = ({ short_name }) => {
    axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`)
    .then(({data}) => {
        this.setState({
          items: data,
          selectedCategory: short_name
        });
    })
  }
  render() {
    const { categories, items, selectedCategory } = this.state;
    return (
      <main>
        <Categories options={categories} getItems={this.getItems}/>
        {selectedCategory && <ItemsTable items={items} selectedCategory={selectedCategory} />}
      </main>
    );
  }
}

export default App;
