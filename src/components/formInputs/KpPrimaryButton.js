import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const KpPrimaryButton = props => {
	const KpPrimaryButtonStyled = makeStyles(theme => ({
		root: {
			color: theme.palette.common.white,
			margin: 0,
			overflow: 'visible',
			cursor: 'pointer',
			'text-transform': 'none',
			backgroundColor: theme.palette.primary.main,
			'&: hover': '&: focus',
			'&: active': {
				backgroundColor: theme.palette.primary.dark,
				color: theme.palette.text.main,
			},
			'&: disabled': {
				backgroundColor: '#d3d6dc',
			},
			display: 'inline-block',
			padding: '13px 30px',
			minWidth: '160px',
			border: 0,
			'text-align': 'center',
			'box-sizing': 'border-box',
			height: 'auto',
			'line-height': '20px',
			'vertical-align': 'middle',
			'white-space': 'normal',
			'word-wrap': 'break-word',
			'border-top-left-radius': 0,
			'border-top-right-radius': 0,

			transition:
				'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
		},
	}));
	const ref = React.createRef();
	const classes = KpPrimaryButtonStyled();
	const handleClick = e => {
		console.log('e: ', e.target);
		ref.current.focus();
	};
	return (
		<div>
			<Button
				variant="outlined"
				classes={{ root: classes.root }}
				onClick={handleClick}
				{...props}
			></Button>
		</div>
	);
};

export default KpPrimaryButton;
