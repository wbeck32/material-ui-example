import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageContainer from './src/components/containers/PageContainer';
import theme from './src/static/theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<CssBaseline />
				<PageContainer />
			</Fragment>
		</ThemeProvider>
	);
};

export default hot(module)(App);
