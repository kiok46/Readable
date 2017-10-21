import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import './App.css';
import Category from './components/CategoriesContainer';
import PostsContainer from './components/PostsContainer';

class App extends Component {

  render() {
    return (
        <div>
            <Category/>
            <Divider/>
            <PostsContainer/>
        </div>
    );
  }
}

export default App;
