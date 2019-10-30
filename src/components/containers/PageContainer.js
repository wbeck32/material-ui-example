import React from 'react';
import HeaderMenu from '../common/HeaderMenu';
import ActionArea from '../common/ActionArea';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';
import Grid from '@material-ui/core/Grid';

const PageContainer = () => {
	return (
		<div>
			<HeaderMenu />
			<Sidebar></Sidebar>
			<ActionArea></ActionArea>
			<Footer></Footer>
		</div>
	);
};

export default PageContainer;
