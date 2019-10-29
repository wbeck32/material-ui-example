import React from 'react';
import KpPrimaryButton from './KpPrimaryButton';

const KpButton = props => {
	const ref = React.createRef();

	const handleClick = e => {
		console.log('e: ', e.target);
		ref.current.focus();
	};

	return (
		<div>
			<KpPrimaryButton
				ref={ref}
				children={props.children}
				onClick={handleClick}
			></KpPrimaryButton>
		</div>
	);
};
export default KpButton;
