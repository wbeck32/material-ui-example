import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
	background: '#0078B3',
	borderRadius: 0,
	border: 0,
	color: 'white',
	height: 48,
	padding: '17px 0',
	textTransform: 'none',
});

const KpButton = props => {
	const ref = React.createRef();

	const handleClick = e => {
		console.log('e: ', e.target);
		ref.current.focus();
	};

	return (
		<MyButton
			ref={ref}
			children={props.children}
			onClick={handleClick}
		></MyButton>
	);
};

export default KpButton;
