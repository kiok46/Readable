import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class EditPostDialog extends Component {

	state= {
		open: false,
    }

    openEditDialog = () => {
    };

    openDeleteDialog = () => {
    };

	handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

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
			<Dialog
			  title="Create a Post"
			  actions={actions}
			  modal={false}
			  open={this.state.open}
			  onRequestClose={this.handleClose}
			>
			  The actions in this window were passed in as an array of React objects.
			</Dialog>
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

EditPostDialog.defaultProps = {
}


EditPostDialog.propTypes = {
}


export default EditPostDialog;
