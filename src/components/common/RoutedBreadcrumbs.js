import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	List,
	Link,
	ListItem,
	ListItemText,
	Typography,
	Breadcrumbs,
} from '@material-ui/core';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const breadcrumbNameMap = {
	'/': 'Home',
	'/newRequest': 'New request',
	'/customers': 'Customers',
	'/contacts': 'Contacts',
	'/configure': 'Configure',
};

const useStyles = makeStyles(theme => ({
	root: {
		verticalAlign: 'middle',
	},
	list: {
		backgroundColor: theme.palette.primary.dark,
		display: 'inline-flex',
		width: '100%',
		padding: 0,
		margin: 0,
	},
	listItem: {
		color: theme.palette.common.white,
		padding: '0 20px',
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
			textDecorationLine: 'underline',
			textDecorationColor: theme.palette.common.white,
			textUnderlinePosition: 'under',
		},
		fontSize: theme.typography.h3.fontSize,
		fontWeight: theme.typography.fontWeightLight,
	},
	breadcrumbs: {
		margin: '5px 0 5px 20px',
	},
}));

const ListItemLink = props => {
	const classes = useStyles();
	const { to, ...other } = props;
	const linkTitle = breadcrumbNameMap[to];

	return (
		<li>
			<ListItem
				button
				variant="text"
				component={RouterLink}
				className={classes.listItem}
				to={to}
				disableRipple={true}
				{...other}
			>
				<ListItemText
					primary={linkTitle}
					primaryTypographyProps={{ className: classes.root }}
				/>
			</ListItem>
		</li>
	);
};

const LinkRouter = props => <Link {...props} component={RouterLink} />;

const RoutedBreadcrumbs = props => {
	const { breadcrumbsProps } = props;
	const classes = useStyles();

	const handleClick = path => {
		window.location.href = path;
	};

	return (
		<MemoryRouter initialEntries={['/']} initialIndex={0}>
			<div className={classes.root}>
				<nav className={classes.list} aria-label="header menu">
					<List className={classes.list}>
						{breadcrumbNameMap &&
							Object.entries(breadcrumbNameMap).map(link => {
								return (
									<ListItemLink
										onClick={() => handleClick(link[0])}
										to={link[0]}
										key={link[0]}
									>
										{link[1]}
									</ListItemLink>
								);
							})}
					</List>
				</nav>
				<Route>
					{({ location }) => {
						const pathnames = location.pathname.split('/').filter(x => x);
						return (
							<Breadcrumbs
								{...breadcrumbsProps}
								className={classes.breadcrumbs}
								separator=">"
								aria-label="breadcrumb"
							>
								<LinkRouter color="inherit" to="/">
									Home
								</LinkRouter>
								{pathnames.map((value, index) => {
									const last = index === pathnames.length - 1;
									const to = `/${pathnames.slice(0, index + 1).join('/')}`;

									return last ? (
										<Typography
											color="textPrimary"
											className={classes.root}
											key={to}
										>
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
};

RoutedBreadcrumbs.propTypes = {
	breadcrumbsProps: PropTypes.object,
	breadcrumbNameMap: PropTypes.object,
};

export default RoutedBreadcrumbs;
