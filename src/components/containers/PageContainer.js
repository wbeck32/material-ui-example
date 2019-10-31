import React from 'react';
import Header from '../common/Header';
import ActionArea from '../common/ActionArea';
import Footer from '../common/Footer';
import { Typography, CssBaseline } from '@material-ui/core';

const PageContainer = () => {
	return (
		<div>
			<CssBaseline>
				<Typography component="div" variant="body1">
					<Header />
					<ActionArea></ActionArea>
					<Footer />
				</Typography>
			</CssBaseline>
		</div>
	);
};

export default PageContainer;
