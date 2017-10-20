import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Categories.css';

import {connect} from 'react-redux';
import * as actions from '../actions';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};


class Category extends Component {

    componentWillMount() {
        this.props.getCategories();
    }

    renderCard = (category) => {
        return(
            <Card className="row" style={{ margin: 3}}>
                <CardTitle title={category.title} />
                <CardActions>
                  <RaisedButton label="Posts" primary={true} style={style} onClick={() => this._getCategories()} />
                  <RaisedButton label="Create Post" secondary={true} style={style} />
                </CardActions>
            </Card>
        )
    }

    renderCards = () => {
        return this.props.categories.map((category, idx) => {
            return (
                <Card className="row" style={{ margin: 3}} key={idx}>
                    <CardTitle title={category.name} />
                    <CardActions>
                      <RaisedButton label="Posts" primary={true} style={style} onClick={() => {}} />
                      <RaisedButton label="Create Post" secondary={true} style={style} />
                    </CardActions>
                </Card>
            )
        })
    }

	render() {
		return (
			<div className="categoryContainer">
				<div className="rows">
                    {this.renderCards()}
				</div>
			</div>
		)
	}
}

const styles = {
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
    return {categories: state.CategoryReducer.categories}
}


export default connect(mapStateToProps, actions)(Category);
