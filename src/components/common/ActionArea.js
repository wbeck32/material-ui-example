import React from 'react';
import KpPrimaryButton from '../formInputs/KpPrimaryButton';
import { useTheme } from '@material-ui/core/styles';

const ActionArea = () => {
	const theme = useTheme();
	const props = {
		children: 'Primary Button',
		disableRipple: true,
		theme,
	};
	return (
		<div>
			<KpPrimaryButton {...props} />
		</div>
	);
};

export default ActionArea;
