import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Categories.css';

import {connect} from 'react-redux';
import * as actions from '../actions';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class PostsContaner extends Component {

    state = {
      open: false,
    };

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    componentWillMount() {
        this.props.getPosts();
    }

    renderPosts = () => {
        return this.props.posts.map((post, idx) => {
            return (
                <Card className="row" style={{ margin: 3, width: '100%'}} key={idx}>
                    <CardTitle title={post.title} />
                    <CardActions>
                      <RaisedButton label="Edit" style={styles.categoryStyle} />
                      <RaisedButton label="Delete" style={styles.categoryStyle} onClick={this.handleOpen} />
                    </CardActions>
                </Card>
            )
        })
    }

	render() {

		return (
			<div>
				<div className="rows">
                    {this.renderPosts()}
				</div>
			</div>
		)
	}
}

const styles = {
  categoryStyle: {
    margin: 12,
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
