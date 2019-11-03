import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Breadcrumb = () => {
	const theme = useTheme();
	const BreadcrumbContainer = withStyles({
		root: {
			backgroundColor: theme.palette.common.black,
		},
	})(Breadcrumbs);

	function handleClick(event) {
		event.preventDefault();
		alert('You clicked a breadcrumb.');
	}
	return (
		<BreadcrumbContainer>
			<Breadcrumbs separator="›" aria-label="breadcrumb">
				<Link color="inherit" href="/" onClick={handleClick}>
					Material-UI
				</Link>
				<Link
					color="inherit"
					href="/getting-started/installation/"
					onClick={handleClick}
				>
					Core
				</Link>
				<Typography color="textPrimary">Breadcrumb</Typography>
			</Breadcrumbs>
		</BreadcrumbContainer>
	);
};
export default Breadcrumb;
