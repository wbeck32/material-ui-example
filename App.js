import React from 'react';
import Header from './src/components/common/Header';
import ActionAreaContainer from './src/components/containers/ActionAreaContainer';
import Footer from './src/components/common/Footer';

const App = props => {
	return (
		<div>
			<Header />
			<ActionAreaContainer />
			<Footer />
		</div>
	);
};

export default App;
