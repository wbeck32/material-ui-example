/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const breadcrumbNameMap = {
	'/user': 'User Management',
	'/user/configure': 'Configure Capabilities',
	'/trash': 'Trash',
	'/spam': 'Spam',
	'/drafts': 'Drafts',
};

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: 360,
	},
	lists: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing(1),
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

const LinkRouter = props => <Link {...props} component={RouterLink} />;

export default function Breadcrumb() {
	const classes = useStyles();

	const handleClick = e => {
		event.preventDefault();
		alert('You clicked a breadcrumb.');
	};

	return (
		<MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
			<div className={classes.root}>
				<Route>
					{({ location }) => {
						const pathnames = location.pathname.split('/').filter(x => x);

						return (
							<Breadcrumbs separator=">" aria-label="breadcrumb">
								<LinkRouter color="inherit" to="/">
									User Management
								</LinkRouter>
								{pathnames.map((value, index) => {
									const last = index === pathnames.length - 1;
									const to = `/${pathnames.slice(0, index + 1).join('/')}`;

									return last ? (
										<Typography color="textPrimary" key={to}>
											{breadcrumbNameMap[to]}
										</Typography>
									) : (
										<LinkRouter color="inherit" to={to} key={to}>
											{breadcrumbNameMap[to]}
										</LinkRouter>
									);
								})}
							</Breadcrumbs>
						);
					}}
				</Route>
			</div>
		</MemoryRouter>
	);
}
