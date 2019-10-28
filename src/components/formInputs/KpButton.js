import React from 'react';
import testing from '../../../testing';
const { button } = testing['@global'];
import { useTheme } from '@material-ui/core/styles';

const KpButton = props => {
	const kpTheme = useTheme();
	const ref = React.createRef();
	const handleClick = e => {
		console.log('e: ', e.target);
		ref.current.focus();
	};

	return (
		<button
			className={kpTheme.palette.common.black}
			ref={ref}
			children={props.children}
			onClick={handleClick}
		></button>
	);
};

export default KpButton;
