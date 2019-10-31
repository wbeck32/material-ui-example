import React from 'react';
import Header from '../common/Header';
import ActionArea from '../common/ActionArea';
import Footer from '../common/Footer';
import { Container, Typography } from '@material-ui/core';

const PageContainer = () => {
	return (
		<div>
			<Typography component="div" variant="body1">
				<Container>
					<Header />
					<ActionArea></ActionArea>
					<Footer />
				</Container>
			</Typography>
		</div>
	);
};

export default PageContainer;
