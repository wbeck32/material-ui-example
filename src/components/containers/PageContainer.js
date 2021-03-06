import React from 'react';
import Header from '../common/Header';
import ActionArea from '../common/ActionArea';
import Footer from '../common/Footer';
import { CssBaseline } from '@material-ui/core';
import ThemeTester from '../../static/theme/ThemeTester'

const PageContainer = () => {
	return (
		<div>
			<Header />
			<ThemeTester />
		</div>
	);
};

export default PageContainer;
