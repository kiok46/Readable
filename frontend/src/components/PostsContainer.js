import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import * as actions from '../actions';

import IndividualPost from './IndividualPost';

class PostsContaner extends Component {
    state= {
        points: 0,
        voted: false,
        voteType: undefined,
    }

    componentWillMount() {
        this.props.getPosts();
    }



    // '#FF8b60' '#9494FF'

    renderPosts = () => {
        return this.props.posts.map((post, idx) => {
            return (
                <IndividualPost
                    title={post.title}
                    category={post.category}
                    body={post.body}
                />
            )
        })
    }
	render() {
		return (
			<div className="rows">
                {this.renderPosts()}
			</div>
		)
	}
}

const styles = {
  actionButtonStyle: {
    margin: 12,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10,
  },
  chip: {
    margin: 10,
    paddingTop: 3,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

PostsContaner.propTypes = {
}

const mapStateToProps = (state) => {
    return {posts: state.PostsReducer.posts}
}


export default connect(mapStateToProps, actions)(PostsContaner);
