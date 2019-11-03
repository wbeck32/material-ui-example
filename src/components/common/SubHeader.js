import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Breadcrumb from './Breadcrumb';
import { Container } from '@material-ui/core';

const SubHeader = () => {
	const theme = useTheme();
	const SubheaderContainer = withStyles({
		root: {
			height: '100px',
			backgroundColor: theme.palette.secondary.light,
			padding: '25px',
			margin: 0,
			color: theme.palette.common.black,
		},
	})(Container);

	return (
		<SubheaderContainer>
			<Breadcrumb>jkjk</Breadcrumb>
		</SubheaderContainer>
	);
};

export default SubHeader;
