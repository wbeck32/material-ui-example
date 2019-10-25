import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles => ({
	root: {
		background: '#0078B3',
		borderRadius: 0,
		border: 0,
		color: 'white',
		height: 48,
		padding: '17px 0',
		textTransform: 'none',
	},
});

const classes = useStyles();

const KpButton = props => {
	console.log('classes: ', classes);
	const refContainer = React.useRef('hello');
	const handleClick = e => {
		console.log('e: ', e);
		refContainer.current.focus();
	};

	return (
		<Button
			ref={refContainer}
			onClick={handleClick}
			className={classes.root}
		></Button>
	);
};

export default KpButton;
