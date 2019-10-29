import React from 'react';
import { Button } from '@material-ui/core';
import { styled, useTheme } from '@material-ui/core/styles';

const KpPrimaryButton = props => {
	const theme = useTheme();
	const KpPrimaryButtonStyled = styled(Button)({
		color: theme.palette.primary.main,
		'font-family': theme.typography.button.fontFamily,
		margin: 0,
		overflow: 'visible',
		'text-transform': 'none',
		cursor: 'pointer',
		backgroundColor: '#0078b3',
		'&: hover': '&: focus',
		'&: active': {
			backgroundColor: theme.palette.primary.dark,
			color: '#fff',
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
		// 'border-radius': 0,
		transition:
			'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
	});

	const ref = React.createRef();
	const children = 'Primary Button';
	const handleClick = e => {
		console.log('e: ', e.target);
		ref.current.focus();
	};
	return (
		<div>
			<KpPrimaryButtonStyled
				ref={ref}
				children={children}
				onClick={handleClick}
			></KpPrimaryButtonStyled>
		</div>
	);
};

export default KpPrimaryButton;
