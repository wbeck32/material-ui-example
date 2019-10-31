import React from 'react';
import KpPrimaryButton from '../formInputs/KpPrimaryButton';
import { useTheme } from '@material-ui/core/styles';
import Header from './Header';

const ActionArea = () => {
	const theme = useTheme();
	const props = {
		children: 'Primary Button',
		disableRipple: true,
		theme,
	};
	return <div></div>;
};

export default ActionArea;
