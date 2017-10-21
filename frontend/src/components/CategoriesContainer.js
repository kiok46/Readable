import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Categories.css';

import {connect} from 'react-redux';
import * as actions from '../actions';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class Category extends Component {

    state = {
      open: false,
    };

    componentWillMount() {
        this.props.getCategories();
    }

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    renderPostsOfCategory = (name) => {
        this.props.getPostsOfCategory(name);
    }

    renderCategory = () => {
        return this.props.categories.map((category, idx) => {
            return (
                <Card className="row" style={{ margin: 3}} key={idx}>
                    <CardTitle title={category.name} />
                    <CardActions>
                      <RaisedButton label="Posts" primary={true} style={styles.categoryStyle} onClick={() => this.renderPostsOfCategory(category.name)}/>
                      <RaisedButton label="Create Post" secondary={true} style={styles.categoryStyle} onClick={this.handleOpen} />
                    </CardActions>
                </Card>
            )
        })
    }

	render() {
        const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleClose}
          />,
        ];
		return (
			<div className="categoryContainer">
				<div className="rows">
                    <RaisedButton label="Show All" primary={true} style={styles.categoryStyle} onClick={() => this.props.getPosts()}/>
                    {this.renderCategory()}
                    <Dialog
                      title="Create a Post"
                      actions={actions}
                      modal={false}
                      open={this.state.open}
                      onRequestClose={this.handleClose}
                    >
                      The actions in this window were passed in as an array of React objects.
                    </Dialog>
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

Category.propTypes = {
}

const mapStateToProps = (state) => {
    return {
        categories: state.CategoryReducer.categories
    }
}


export default connect(mapStateToProps, actions)(Category);
