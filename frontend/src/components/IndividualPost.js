import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardTitle, CardHeader} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';


class IndividualPost extends Component {

	state= {
        points: 0,
        voted: false,
        voteType: undefined,
    }

	onUpVote = () => {
        if (this.state.voted && this.state.voteType === 'up'){
            this.setState({
                voted: !this.state.voted,
                voteType: undefined,
                points: this.state.points - 1
            })
        } else if (this.state.voted && this.state.voteType === undefined) {
            this.setState({
                voted: !this.state.voted,
                voteType: 'up',
                points: this.state.points + 1
            })
        }else if (this.state.voted && this.state.voteType === 'down') {
            this.setState({
                voteType: 'up',
                points: this.state.points + 2
            })
        } else {
            this.setState({
                voted: true,
                voteType: 'up',
                points: this.state.points + 1
            })
        }

    }

    onDownVote = () => {
        if (this.state.voted && this.state.voteType === 'down'){
            this.setState({
                voted: !this.state.voted,
                voteType: undefined,
                points: this.state.points + 1
            })
        } else if (this.state.voted && this.state.voteType === undefined) {
            this.setState({
                voted: !this.state.voted,
                voteType: 'down',
                points: this.state.points - 1
            })
        } else if (this.state.voted && this.state.voteType === 'up') {
            this.setState({
                voteType: 'down',
                points: this.state.points - 2
            })
        } else {
            this.setState({
                voted: true,
                voteType: 'down',
                points: this.state.points - 1
            })
        }
    }

	render() {
		return (
			<Card className="row" style={{ margin: 3, width: '100%'}}>
                <CardTitle title={this.props.title} />
                    <CardHeader
                      title={this.props.category}
                      subtitle={this.props.body}
                      actAsExpander={true}
                      showExpandableButton={true}
                    />
                    <div style={styles.wrapper}>
                        <IconButton tooltip="Loved it!" onClick={() => this.onUpVote()}>
                          <ThumbUp color={this.state.voteType === 'up' ? '#FF8b60': 'black'}/>
                        </IconButton>
                        <IconButton tooltip="Hated it!" onClick={() => this.onDownVote()}>
                          <ThumbDown color={this.state.voteType === 'down' ? '#9494FF': 'black'}/>
                        </IconButton>
                        <Chip
                           style={styles.chip}
                        >
                             {this.state.points}
                        </Chip>
                    </div>
                <CardActions>
                  <RaisedButton label="Edit" style={styles.actionButtonStyle} />
                  <RaisedButton label="Delete" style={styles.actionButtonStyle} onClick={this.handleOpen} />
                </CardActions>
            </Card>
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

IndividualPost.propTypes = {
}


export default IndividualPost;
