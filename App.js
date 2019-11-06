import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import PageContainer from './src/components/containers/PageContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './src/static/theme/theme'


const App = () => {

	return (
		<ThemeProvider theme={theme}>
			<PageContainer />
		</ThemeProvider>
	);
};

export default hot(module)(App);
