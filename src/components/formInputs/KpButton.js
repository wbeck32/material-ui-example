import React from 'react';
import testing from '../../../testing';
const { button } = testing['@global'];

const KpButton = props => {
	console.log('props: ', props);
	const ref = React.createRef();
	const handleClick = e => {
		console.log('e: ', e.target);
		ref.current.focus();
	};

	return (
		<button
			style={button}
			ref={ref}
			children={props.children}
			onClick={handleClick}
		></button>
	);
};

export default KpButton;
