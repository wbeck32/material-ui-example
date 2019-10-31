import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const SubHeader = () => {
	const theme = useTheme();
	const SubheaderContainer = withStyles({
		root: {
			height: '100px',
			backgroundColor: theme.palette.secondary.light,
			padding: '25px',
			margin: 0,
		},
	})(({ classes }) => <Box className={classes.root} />);

	return (
		<div>
			<SubheaderContainer />
		</div>
	);
};

export default SubHeader;
