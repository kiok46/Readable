import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import './App.css';
import Category from './components/CategoriesContainer';
import PostsContainer from './components/PostsContainer';

class App extends Component {

  renderPosts = () => {
      return (
          <PostsContainer/>
      )
  }

  render() {
    return (
        <div>
            <Category/>
            <Divider/>
            {this.renderPosts()}
        </div>
    );
  }
}

export default App;
