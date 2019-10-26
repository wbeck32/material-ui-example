import React from 'react';
import { ThemeProvider } from 'theming';
import { hot } from 'react-hot-loader/root';
import PageContainer from './src/components/containers/PageContainer';
import theme from './src/static/themeProps';

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
