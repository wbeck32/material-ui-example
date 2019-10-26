import React from 'react';
import { ThemeProvider } from 'theming';

import { hot } from 'react-hot-loader/root';
import PageContainer from './src/components/containers/PageContainer';
const theme = {
	color: 'black',
	background: 'white',
};
const App = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<PageContainer key={true} />
			</ThemeProvider>
		</div>
	);
};

export default hot(App);
