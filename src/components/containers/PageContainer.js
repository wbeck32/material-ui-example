import React from 'react';
import Header from '../common/Header';
import ActionArea from '../common/ActionArea';
import Footer from '../common/Footer';
import { CssBaseline } from '@material-ui/core';

const PageContainer = () => {
	return (
		<div>
			<CssBaseline>
				<Header />
				<ActionArea></ActionArea>
				<Footer />
			</CssBaseline>
		</div>
	);
};

export default PageContainer;
