import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import KpButtonStyles from './KpButtonStyles';
import { Button } from '@material-ui/core';

const KpButton = props => {
	const classes = KpButtonStyles();
	const kpTheme = useTheme();
	const ref = React.createRef();

	const handleClick = e => {
		console.log('e: ', e.target);
		ref.current.focus();
	};

	return (
		<div>
			<Button
				ref={ref}
				children={props.children}
				onClick={handleClick}
				className={classes.root}
				label={classes.label}
			></Button>
		</div>
	);
};

export default KpButton;
