import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const ThemedButton = props => {
	const { buttonControlProps, handleClick, typeOfButton, buttonText } = props;
	const ThemedButtonStyled = makeStyles(theme => ({
		primary: {},
		secondary: {},
		disabled: {},
	}));

	const classes = ThemedButtonStyled();

	return (
		<div>
			<Button
				{...buttonControlProps}
				classes={{ root }}
				className={classes.root}
				onClick={handleClick}
			>
				{buttonText}
			</Button >
		</div >
	);
};

ThemedButton.propTypes = {
	buttonControlProps: PropTypes.object,
	buttonText: PropTypes.string,
	handleClick: PropTypes.func,
	typeOfButton: PropTypes.string,
};
export default ThemedButton;
