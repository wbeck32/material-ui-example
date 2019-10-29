import React from 'react';
import KpButton from '../formInputs/KpButton';

const ActionArea = props => {
	console.log('props in action area: ', props);
	return (
		<div>
			<KpButton>Primary Button</KpButton>
		</div>
	);
};

export default ActionArea;
